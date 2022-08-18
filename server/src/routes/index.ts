import { Router } from 'express';
import { PlayersController } from '../controllers';

export function registerRoutes(router: Router) {
    /* Players api */
    router.get('/api/players', PlayersController.getPlayers)
}