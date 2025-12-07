export interface Card {
  id: number;
  name: string;
  code: string;
  pokemon?: number;
  setId: number;
  rarityId: number;
  typeId: number;
  order: number;
  standardImage: string;
  highImage: string;
}
