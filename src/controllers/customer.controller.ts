import { RESTDataSource } from 'apollo-datasource-rest';
import { Static } from '../factories/user.factory';
import { CustomerBookingModel } from '../factories';
import { ICustomerBooking, ICustomerBookingReturn } from '../models/customer.model';

export default class CustomerController extends RESTDataSource {
	model: Static = CustomerBookingModel;

	init(model: Static) {
		this.model = model;
	}

	public async getBooking(bookingId: number): Promise<ICustomerBookingReturn> {
		const data: ICustomerBooking = await this.model.findByPk(bookingId, {
			include: ['customer_booking_customer', 'customer_booking_barber', 'customer_booking_shop', 'customer_booking_service']
		});

		return {
			id: data.bok_id,
			barberId: data.customer_booking_barber.user_id,
			barber: data.customer_booking_barber.first_name,
			shopId: data.customer_booking_shop.sho_id,
			shop: data.customer_booking_shop.name,
			serviceId: data.customer_booking_service.ser_id,
			service: data.customer_booking_service.name,
			amount: data.amount,
			bookingFee: data.booking_fee,
			total: +data.amount + +data.booking_fee,
			date: data.booking_date,
			comment: data.comment || ''
		}
	}

	public async getBookings(customerId: number): Promise<ICustomerBookingReturn[]> {
		const result = await this.model.findAll(
			{
				where: { customer_id: customerId },
				include: ['customer_booking_customer', 'customer_booking_barber', 'customer_booking_shop', 'customer_booking_service']
			}
		);

		return result.map(s => {
			const data = s.dataValues as ICustomerBooking;

			return {
				id: data.bok_id,
				barberId: data.customer_booking_barber.user_id,
				barber: data.customer_booking_barber.first_name,
				shopId: data.customer_booking_shop.sho_id,
				shop: data.customer_booking_shop.name,
				serviceId: data.customer_booking_service.ser_id,
				service: data.customer_booking_service.name,
				amount: data.amount,
				bookingFee: data.booking_fee,
				total: +data.amount + +data.booking_fee,
				date: data.booking_date,
				comment: data.comment || ''
			}
		});
	}

	public async createBooking(bookingData: ICustomerBooking): Promise<ICustomerBooking> {
		const booking = {
			...bookingData,
			created_by: bookingData.customer_id,
			updated_by: bookingData.customer_id
		};

		const x = await this.model.create(booking);
		return x.dataValues;
	}
}
