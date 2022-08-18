import { FantasyPlayer, FantasyPlayerRepository } from '../data';
import { Request, Response } from 'express';
import { Query } from '../data/models';

const getPlayers = async (req: Request, res: Response) : Promise<void> => {
    const query = req.query as Query<FantasyPlayer>;

    var data = await FantasyPlayerRepository.get(query);

    res.json(data);
}

export const PlayersController = {
    getPlayers
};