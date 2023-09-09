import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function getDeckController(req:Request, res:Response) {
    try {
        const {id} = req.params;
        const deckData = await Deck.findById(id);

        res.json(deckData);
        
    } catch (error) {
        res.sendStatus(404).send('not found');
    }

}