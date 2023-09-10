import { API_url } from "./config";
import { deckProps } from "./getDecks";


export async function deleteCard(deckId: string, index: number): Promise<deckProps> {

    try {
      const response = await fetch(`${API_url}/decks/${deckId}/cards/${index}`, {
          method: "DELETE"
      });
      
      if (!response.ok) {
          throw new Error(`Failed to delete card with status: ${response.statusText}`);
      }
      return response.json();
      
  } catch (err) {
      console.error("Failed to delete card", err);
      throw err; 
  }
}
