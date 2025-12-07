import * as PokeCardex from "../interfaces/pokecardex";
import { Version } from "../interfaces/version";

export const mapPokecardexToVersion = (value: PokeCardex.Version): Version => ({
  id: value.i,
  name: value.e,
});
