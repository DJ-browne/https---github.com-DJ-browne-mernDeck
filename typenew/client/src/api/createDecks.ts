import { API_url } from "./config";

export async function createDecks(title:string) {
    const response = await fetch(`${API_url}/decks`, {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => {
      console.error("failed fetch", err);
    });

    return response?.json();
}