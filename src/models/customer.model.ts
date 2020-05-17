import { IService } from '../controllers/owner.controller';
import { IShop } from './shop.model';
import { IBarber, ICustomer } from './user.model';

export interface ICustomerBooking {
	bok_id?: number;
	customer_id: number;
	shop_id: number;
	barber_id: number;
	service_id: number;
	status: string;
	booking_date: Date;
	amount: number;
	booking_fee: number;
	total?: number;
	comment: string;
	created_at?: string;
	created_by: number;
	updated_at?: string;
	updated_by: number;
	customer_booking_customer?: ICustomer;
	customer_booking_barber?: IBarber;
	customer_booking_shop?: IShop;
	customer_booking_service?: IService;
}

export interface ICustomerBookingReturn {
	id: number;
	shopId: number;
	shop: string;
	barberId: number;
	barber: string;
	barber_img: string;
	serviceId: number;
	service: string;
	comment: string;
	date: Date;
	amount: number;
	bookingFee: number;
	total: number;
}
