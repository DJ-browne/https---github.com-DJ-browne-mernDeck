import { useEffect, useState } from "react";
import "./App.css";
import {Link} from "react-router-dom";
import { deleteDecks } from "./api/deleteDecks";
import { createDecks } from "./api/createDecks";
import { deckProps, getDecks } from "./api/getDecks";


function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<deckProps[]>([]);

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createDecks(title);
    setDecks([...decks, deck]);
    setTitle("");
  }
  async function handleDeleteDeck(deckId:string) {
    
    await deleteDecks(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId))
    
  }
  

  useEffect(() => {
    async function fetchDecks() {
      const decksData = await getDecks();      
      setDecks(decksData);
    }
    fetchDecks();
  }, []);

  return (
    <div className="container">
    <div className="App">
      <h1>Your Decks</h1>
      <div className="decks">
        {decks.map((deck)=>(
          <li key={deck._id}>
          <button className="deleteBtn"
          onClick={() =>handleDeleteDeck(deck._id)}>
            X</button>            
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deckTitle">Deck Title</label>
        <input
          id="deckTitle"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
    </div>
  );
}

export default App;
