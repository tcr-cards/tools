import { CardSlim } from "./CardSlim";

export interface PaginatedCards {
  items: CardSlim[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}
