import { Series } from "../interfaces/pokecardex";
import { CardSet, CardSetType } from "../interfaces/set";

export const mapPokecardexToSet = (value: Series, region: string): CardSet => ({
  id: value.i,
  name: value.u ?? value.f,
  code: value.c,
  releaseDate: new Date(value.r * 1000).toISOString(),
  type: value.a as string as CardSetType,
  order: value.s,
  logo: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "logos/US" : region === "JAPAN" ? "logos_jp" : "logos_chn"}/${value.c.toUpperCase()}.png`,
  symbol: `https://pokecardex.b-cdn.net/assets/images/${region === "WORLD" ? "symboles" : region === "JAPAN" ? "symboles_jp" : "symboles_chn"}/${value.c.toUpperCase()}.png`,
});
