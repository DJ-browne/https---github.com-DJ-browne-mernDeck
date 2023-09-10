import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function deleteCardOnDeckController (req:Request, res:Response) {
    try {
        const id = req.params.id
        const index = req.params.index
        const deckData = await Deck.findById(id);
        deckData?.cards.splice(parseInt(index),1);
        await deckData?.save();
        res.json(deckData);
        
    } catch (error) {
        res.sendStatus(404).send('not found');
    }
}


