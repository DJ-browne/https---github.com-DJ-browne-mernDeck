import {Request, Response} from 'express';
import Deck from '../models/Deck'

export async function createDecksController(req:Request, res:Response) {
    try {
        const {title} = req.body;        
        const newDeck = new Deck({
            title: title
        });
        const createdDeck = await newDeck.save();
        res.json(createdDeck);
        
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};