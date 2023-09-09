import express, {Request, Response, json} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Deck from './models/Deck'
import cors from 'cors';
import {getDecksController} from './controllers/getDecksController'
import {createDecksController} from './controllers/createDecksController'
import {deleteDecksController} from './controllers/deleteDecksController'
import { createCardForDeckController } from './controllers/createCardForDeckController';
import { getDeckController } from './controllers/getDeckController';


dotenv.config();
const app = express();
const PORT = process.env.PORT!;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/decks', createDecksController);
app.get('/decks', getDecksController); 
app.delete('/decks/:id', deleteDecksController);
app.post('/decks/:id/cards', createCardForDeckController);
app.get('/decks/:id', getDeckController); 


mongoose.connect(process.env.MONGODB!)
.then( ()=> {
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`)
    });
})
.catch(err => {
    console.error('Failed to connect to Mongo', err);
});

    

