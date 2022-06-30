import { Account } from "../model/account.model";


export const accountMock: Account = {
    id: 3,
	clientName: 'Dubai Customs',
	description: 'Account 1',
	legalEntity: 'RUH',
	address: {
        id: 1,
        city: 'Dubai',
        country: 'United Arab Emirates',
        buildingRef: '12345',
        faxNo: '025438846',
        mobileNo: '+971 03 421 8983',
    },
	departments: [
        {
            id: 1,
            name: 'Department 1',
            classification: 'Government',
        },
        {
            id: 2,
            name: 'Department 2',
            classification: 'Government',
        },
        {
            id: 3,
            name: 'Department 3',
            classification: 'Government',
        },
    ],
	contacts: [
        {
            id: 1,
            title: 'Mr',
            name: 'Ahmad Ahmad',
            position: 'It Director',
        },
        {
            id: 2,
            title: 'Mr',
            name: 'Sami Jaber',
            position: 'Finance Manager',
        },
    ],
};
