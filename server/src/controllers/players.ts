import { FantasyPlayer } from '../models/player';
import { Request, Response } from 'express';

const getPlayers = async (req: Request, res: Response) : Promise<void> => {
    var data: FantasyPlayer[] = [
        {
            firstName: 'SamplePlayer',
            lastName: '1',
            _internalId: 'abc123'
        },
        {
            firstName: 'SamplePlayer',
            lastName: '2',
            _internalId: 'xyz123'
        },
        {
            firstName: 'SamplePlayer',
            lastName: '3',
            _internalId: 'abc456'
        }
    ]

    res.json(data);
}

export const PlayersController = {
    getPlayers
};