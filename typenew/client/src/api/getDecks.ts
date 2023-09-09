import { API_url } from "./config";

export type deckProps = {
  title: string;
  _id: string;
  cards: string[];
};

export async function getDecks(): Promise<deckProps[]> {
  const response = await fetch(`${API_url}/decks`);
  // const response = await fetch("http://localhost:5000/decks");
  // const decksData = await response.json();
  return response.json();
}
