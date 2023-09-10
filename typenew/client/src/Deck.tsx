import { useEffect, useState } from "react";
import "./Deck.css";
import { useParams } from "react-router-dom";
import { deckProps } from "./api/getDecks";
import { createCards } from "./api/createCards";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
  const [deck, setDeck] = useState<deckProps | undefined>();
  const [text, setText] = useState("");
  const { id } = useParams<{ id: string }>();
  const [cards, setCards] = useState<string[]>([]);

  async function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
   
    try {
      if (id) {
        const { cards } = await createCards(id, text);
        setCards(cards);
        setText("");
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }
  }

  async function handleDeleteCard(index:number) {

    if(!id) return;
    const newDeck = await deleteCard(id, index);
    setCards(newDeck.cards);

  }

  useEffect(() => {
    async function fetchDeck() {
      if (!id) return;
      const deckData = await getDeck(id);
      setDeck(deckData);
      setCards(deckData.cards);

    }
    fetchDeck();
  }, [id]);

  return (
    <div className="Deck">
      <div className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            <button className="deleteCardBtn"
            onClick={() =>handleDeleteCard(index)}>
              X</button>  
            {card}
          </li>
        ))}
      </div>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="cardText">New Card</label>
        <input
          id="cardText"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}
