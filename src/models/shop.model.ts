import { IBarber } from './user.model';

export interface IShop {
	sho_id?: number;
	owner_id: number;
	name: string;
	email: string;
	phone_number: string;
	address_line1: string;
	address_line2?: string;
	post_code: string;
	city: string;
	country: string;
	created_at?: Date;
	created_by?: number;
	updated_at?: Date;
	updated_by?: number;
}

export interface IShopAvailability {
	sav_id?: number;
	shop_id: number;
	day1: string;
	day2: string;
	day3: string;
	day4: string;
	day5: string;
	day6: string;
	day7: string;
	shop_availability_shop?: IShop;
	created_at?: string;
	created_by?: number;
	updated_at?: string;
	updated_by?: number;
}

export interface IAvailability {
	day: string;
	f: string;
	t: string;
}

export interface IShopDetails {
	shop_id: number;
	name: string;
	email: string;
	barbers: IBarber[];
	shop_availability: IAvailability[];
}
