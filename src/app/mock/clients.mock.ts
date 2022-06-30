import { Client } from "../model/client.model";


export const clientsMock: Client[] = [
    {
        id: 6,
        description: 'Dubai Islamic Bank',
        initials: 'DIB',
        status: 0,
        sector: 'Banking',
    },
    {
        id: 5,
        description: 'DP World',
        initials: 'DPW',
        status: 1,
        sector: 'Government',
    },
    {
        id: 4,
        description: 'The Emirates Group',
        initials: 'TEG',
        status: 2,
        sector: 'Airline',
    },
    {
        id: 3,
        description: 'Dubai Municipality',
        initials: 'DM',
        status: 2,
        sector: 'Government',
    },
    {
        id: 2,
        description: 'Dubai Chamber',
        initials: 'DCH',
        status: 1,
        sector: 'Government',
    },
    {
        id: 1,
        description: 'Dubai Customs',
        initials: 'DC',
        status: 1,
        sector: 'Government',
    }
];
