import { useEffect, useState } from "react";
import "./App.css";
import {Link , useParams} from "react-router-dom";
import { deleteDecks } from "./api/deleteDecks";
import { deckProps, getDecks } from "./api/getDecks";
import { createCards } from "./api/createCards";
import { getDeck } from "./api/getDeck";

export default function Deck() {
    
    const [deck, setDeck] = useState<deckProps | undefined>();
    const [text, setText] = useState("");
    const { id } = useParams<{ id: string }>();
    const [cards, setCards] = useState<string[]>([]);
  
    async function handleCreateDeck(e: React.FormEvent) {

      e.preventDefault();
      try {
        if(id) {
          const {cards: serverCards} = await createCards(id,text);
          console.log(serverCards)
          setCards(serverCards)
          setText('');
        } 
      } catch (error) {
        console.error('Error creating card:', error);
      }

    }
    // async function handleDeleteDeck(deckId:string) {
      
    //   await deleteDecks(deckId);
    //   setDecks(decks.filter((deck) => deck._id !== deckId))
      
    // }
    
  
    useEffect(() => {
        async function fetchDeck() {
          if(!id) return;
        const deckData = await getDeck(id);
        setDeck(deckData);
        console.log(deckData)
        setCards(deckData.text || []);
        
        
      }
      fetchDeck();
    }, [id]);
  
    return (
      <div className="App">
        <div className="cards">
          { cards && cards.map((card)=>(
            <li key={card}>
            {/* <button className="deleteBtn"
            onClick={() =>handleDeleteDeck(card._id)}>
              X</button>   */}
                {card}
         </li> 
       ))}
        </div>
        <form onSubmit={handleCreateDeck}>
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