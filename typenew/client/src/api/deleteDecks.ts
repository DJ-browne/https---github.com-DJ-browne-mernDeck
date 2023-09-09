import { API_url } from "./config";

export async function deleteDecks(deckId:string) {
    await fetch(`${API_url}/decks/${deckId}`, {
        method: "DELETE"
      }).catch((err) => {
        console.error("failed delete", err);
      });
}