import { writeFile } from "node:fs/promises";
import { Pokecardex } from "./interfaces/pokecardex";

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
      lang_theme: "JAPAN",
      validation: true,
    }),
  }
);

const cardex: Pokecardex = await response.json();
