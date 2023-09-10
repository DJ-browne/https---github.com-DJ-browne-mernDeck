import { API_url } from "./config";
import { deckProps } from "./getDecks";

export async function createCards(
  id: string,
  text: string
): Promise<deckProps> {
  try {

    const response = await fetch(`${API_url}/decks/${id}/cards`, {
      method: "POST",
      body: JSON.stringify({
        cards:text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Failed to fetch", error);
    throw error; 
  }
}
