import { Rarity } from "../interfaces/rarity";

export const mapPokecardexToRarity = (value: number): Rarity => ({
  id: value,
  name: "",
  icon: "",
});
