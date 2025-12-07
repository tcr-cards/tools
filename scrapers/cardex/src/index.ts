import { readFile, writeFile } from "node:fs/promises";
import { Pokecardex } from "./interfaces/pokecardex";
import { Rarity } from "./interfaces/rarity";
import { Type } from "./interfaces/type";
import { mapPokecardexToCard } from "./mappers/pokecardex-to-card";
import { mapPokecardexToEra } from "./mappers/pokecardex-to-era";
import { mapPokecardexToRarity } from "./mappers/pokecardex-to-rarity";
import { mapPokecardexToSet } from "./mappers/pokecardex-to-set";
import { mapPokecardexToType } from "./mappers/pokecardex-to-types";
import { mapPokecardexToVersion } from "./mappers/pokecardex-to-version";

const regions = ["WORLD", "JAPAN", "CHINA"];

for (const region of regions) {
  const response = await fetch(
    "https://www.pokecardex.com/webservice_v4/synchronisation",
    {
      method: "POST",
      body: JSON.stringify({
        saltUser: "jJH1Ip8y60reafCCuBsJt28FYlG2fNFrTd/prDmV",
        offline: false,
        appVersionCode: 126,
        version: 2,
        ajouts_grades: [],
        langue: "en",
        code: 40,
        userIdConnected: 958753,
        userIdSynchro: 958753,
        data: [],
        lang_theme: region,
        validation: true,
      }),
    }
  );

  const cardex: Pokecardex = await response.json();
  await writeFile(
    `./data/${region.toLowerCase()}/db.json`,
    JSON.stringify(cardex, undefined, 2)
  );

  const versions = cardex.versions.map(mapPokecardexToVersion);
  await writeFile(
    `./data/${region.toLowerCase()}/versions.json`,
    JSON.stringify(versions, undefined, 2)
  );

  const eras = cardex.blocs.map(mapPokecardexToEra);
  await writeFile(
    `./data/${region.toLowerCase()}/eras.json`,
    JSON.stringify(eras, undefined, 2)
  );

  const sets = cardex.series.map((serie) => mapPokecardexToSet(serie, region));
  await writeFile(
    `./data/${region.toLowerCase()}/sets.json`,
    JSON.stringify(sets, undefined, 2)
  );

  const mappedSets = new Map(sets.map((set) => [set.id, set]));
  const cards = cardex.cartes.map((card) =>
    mapPokecardexToCard(card, region, mappedSets)
  );
  await writeFile(
    `./data/${region.toLowerCase()}/cards.json`,
    JSON.stringify(cards, undefined, 2)
  );

  const oldRarities: Rarity[] = await readFile(`./data/rarities.json`)
    .then((rarities) => JSON.parse(rarities.toString()))
    .catch(() => []);
  const newRarities = [...new Set(cards.map((card) => card.rarityId))]
    .sort((a, b) => a - b)
    .map(mapPokecardexToRarity);
  const rarities = [
    ...new Map(
      [...newRarities, ...oldRarities].map((rarity) => [rarity.id, rarity])
    ),
  ]
    .map(([_, rarity]) => rarity)
    .sort((a, b) => a.id - b.id);
  await writeFile(
    `./data/rarities.json`,
    JSON.stringify(rarities, undefined, 2)
  );

  const oldTypes: Type[] = await readFile(`./data/types.json`)
    .then((types) => JSON.parse(types.toString()))
    .catch(() => []);
  const newTypes = [...new Set(cards.map((card) => card.typeId))]
    .sort((a, b) => a - b)
    .flatMap(mapPokecardexToType);
  const types = [
    ...new Map([...newTypes, ...oldTypes].map((type) => [type.id, type])),
  ]
    .map(([_, type]) => type)
    .sort((a, b) => a.id - b.id);
  await writeFile(`./data/types.json`, JSON.stringify(types, undefined, 2));
}
