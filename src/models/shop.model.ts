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
