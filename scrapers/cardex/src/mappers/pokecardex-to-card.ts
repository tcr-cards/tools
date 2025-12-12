import { Card } from "../interfaces/card";
import { Carte } from "../interfaces/pokecardex";
import { CardSet } from "../interfaces/set";

export const mapPokecardexToCard = (
  value: Carte,
  region: string,
  sets: Map<number, CardSet>
): Card => ({
  id: value.a,
  name: value.g,
  code: value.h,
  setId: value.b,
  pokemon: value.k ?? undefined,
  rarityId: value.i,
  order: value.e,
  typeId: value.c,
  standardImage: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "sets" : region === "JAPAN" ? "sets_jp" : "sets_chn"}/${sets.get(value.b)?.code.toUpperCase()}/${region === "WORLD" ? "US/" : ""}${value.e}.jpg?class=sd`,
  standardImageFallback: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "sets" : region === "JAPAN" ? "sets_jp" : "sets_chn"}/${sets.get(value.b)?.code.toUpperCase()}/${value.e}.jpg?class=sd`,
  highImage: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "sets" : region === "JAPAN" ? "sets_jp" : "sets_chn"}/${sets.get(value.b)?.code.toUpperCase()}/${region === "WORLD" ? "US/" : ""}${region !== "CHINA" ? "HD/" : ""}${value.e}.jpg`,
  highImageFallback: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "sets" : region === "JAPAN" ? "sets_jp" : "sets_chn"}/${sets.get(value.b)?.code.toUpperCase()}/${region !== "CHINA" ? "HD/" : ""}${value.e}.jpg`,
});
