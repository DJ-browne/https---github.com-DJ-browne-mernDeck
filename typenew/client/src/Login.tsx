import { useState } from "react";
import './Login.css';

export default function Login() {

    const [newId, setNewId] =useState('');
    const [password, setPassword] =useState('');


    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        // const deck = await createDecks(title);
        // setDecks([...decks, deck]);
        // setTitle("");
      }


    return (
        <div className="container">
        <div className="Login">

          <div className="logs">
            {/* {decks.map((deck)=>(
              <li key={deck._id}>
              <button className="deleteBtn"
              onClick={() =>handleDeleteDeck(deck._id)}>
                X</button>            
                <Link to={`decks/${deck._id}`}>{deck.title}</Link>
              </li>
            ))} */}
          </div>
          <form onSubmit={handleLogin}>
            <label className="title">Log in</label>
            <input
              id="loginId"
              placeholder="Your Id"
              type="text"
              value={newId}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewId(e.target.value);
              }}
            />
            <input type="password" 
            placeholder="Your Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }} 
              />
            <button>Log in</button>
          </form>
        </div>
        </div>
    )
}