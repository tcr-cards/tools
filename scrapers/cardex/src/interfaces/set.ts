export enum CardSetType {
  DECK = "DECK",
  MINI = "MINI",
  PRIMARY = "PRIMARY",
  PROMO = "PROMO",
  SECONDARY = "SECONDARY",
}
export interface CardSet {
  id: number;
  code: string;
  name: string;
  type: CardSetType;
  releaseDate: string;
  order: number;
  logo: string;
  symbol: string;
}
