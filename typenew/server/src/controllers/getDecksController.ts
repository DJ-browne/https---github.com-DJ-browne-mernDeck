import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function getDecksController(req:Request, res:Response) {
    try {
        const deckData = await Deck.find();
        
        res.json(deckData);
        
    } catch (error) {
        res.sendStatus(404).send('not found');
    }

}