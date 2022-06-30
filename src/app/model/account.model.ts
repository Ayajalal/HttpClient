export interface AccountEdit {
	id: number;
	clientName: string;
	description: string;
	legalEntity: string;

}
export interface Account extends AccountEdit {
	id: number;


}

export interface Address {
	id: number;
	city: string;
	country: string;
	buildingRef: string;
	faxNo: string;
	mobileNo: string;
}

export interface Department {
	id: number;
	name: string;
	classification: string;
}

export interface Contact {
	id: number;
	title: string;
	name: string;
	position: string;
}
