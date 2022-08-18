import { InMemoryRepository } from './models';

const _players: FantasyPlayer[] = [
    {
        firstName: 'SamplePlayer',
        lastName: '1',
        fpId: 'abc123'
    },
    {
        firstName: 'SamplePlayer',
        lastName: '2',
        fpId: 'xyz123'
    },
    {
        firstName: 'SamplePlayer',
        lastName: '3',
        fpId: 'abc456'
    }
];

export type FantasyPlayer = {
    fpId: string;
    firstName: string;
    lastName: string;
}

export const FantasyPlayerRepository = new InMemoryRepository<FantasyPlayer>(_players);