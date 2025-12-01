import { writeFile } from "node:fs/promises";
import { PaginatedCards } from "./interfaces/Paginated";
import { CardSlim } from "./interfaces/CardSlim";

const PER_PAGE_LIMIT = 500;
const BASE_URL = "https://clients.dextcg.com/api/v1/cards";

let page = 1;
let lastPage = 1;

let slimCards: CardSlim[] = [];

while (page <= lastPage) {
  const response = await fetch(
    `${BASE_URL}?page=${page}&perPage=${PER_PAGE_LIMIT}`
  );

  const list = (await response.json()) as PaginatedCards;
  slimCards = [...slimCards, ...list.items];

  console.info(`Finished page: ${page}`);

  lastPage = list.totalPages;
  page++;
}

await writeFile(
  "./data/slim-cards.json",
  JSON.stringify(slimCards, undefined, 2)
);

// With details

let cards: unknown[] = [];

for (const p of slimCards) {
  const response = await fetch(`${BASE_URL}/${p.cardId}`);

  const card = (await response.json()) as unknown;
  cards.push(card);

  console.info(`Finished card: ${p.cardId}`);
}

await writeFile("./data/cards.json", JSON.stringify(cards, undefined, 2));
