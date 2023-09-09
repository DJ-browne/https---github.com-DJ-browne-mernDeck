import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function deleteDecksController (req:Request, res:Response) {
    try {
        const id = req.params.id
        const deckData = await Deck.findByIdAndDelete(id);
        res.json({message: "deleted successfully"});
        
    } catch (error) {
        res.sendStatus(404).send('not found');
    }
}