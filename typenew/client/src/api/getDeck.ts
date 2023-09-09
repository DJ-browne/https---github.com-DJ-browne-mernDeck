import { API_url } from "./config";
import { deckProps } from "./getDecks";

export async function getDeck(id: string): Promise<deckProps> {
  const response = await fetch(`${API_url}/decks/${id}`);


  return response.json();
}
