import { userTypes } from '../types';

export interface IAdmin {
	user_id?: number;
	firebase_id: string;
	user_type: userTypes;
	first_name: string;
	last_name: string;
	email: string;
}

export interface IOwner {
	user_id?: number;
	firebase_id: string;
	user_type: userTypes;
	first_name: string;
	last_name: string;
	email: string;
	date_of_birth: Date;
	main_phone: string;
	address_line1: string;
	address_line2?: string;
	post_code: string;
	city: string;
	country: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface IBarber {
	user_id?: number;
	firebase_id: string;
	user_type: userTypes;
	first_name: string;
	last_name: string;
	email: string;
	shop_id: number;
	main_phone: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface ICustomer {
	user_id?: number;
	firebase_id: string;
	user_type: userTypes;
	first_name: string;
	last_name: string;
	email: string;
	main_phone: string;
	created_at?: Date;
	updated_at?: Date;
}
