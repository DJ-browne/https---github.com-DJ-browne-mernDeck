import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function createCardForDeckController(req:Request, res:Response) {
    
    try {
        const {id} = req.params;        
        const {text} = req.body;
        const deckData = await Deck.findById(id);
        
        if(!deckData) {
            return res.sendStatus(400).send('not found')
        }
        deckData.text.push(text);
        await deckData.save();
        res.json(deckData);

        
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};