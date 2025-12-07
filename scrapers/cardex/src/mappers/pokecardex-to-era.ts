import { Era } from "../interfaces/era";
import { Bloc } from "../interfaces/pokecardex";

export const mapPokecardexToEra = (value: Bloc): Era => ({
  id: value.i,
  name: value.u ?? value.f,
  order: value.s,
});
