import * as Faker from 'faker/locale/en_GB';
import { userTypes } from '../types';
import { CustomerBookingModel, dbConfig, ServiceModel, ShopModel, UserModel } from '../factories';
import { IService } from './owner.controller';
import { ICustomerBooking } from '../models/customer.model';
import { IAdmin, IBarber, ICustomer, IOwner } from '../models/user.model';
import { IShop } from '../models/shop.model';

export default class DataGeneratorController {
	synced: boolean = false;

	private async _sync() {
		if (!this.synced) {
			await dbConfig.sync();
			this.synced = true;
		} else {
			console.log('synced already');
		}
	}

	public async createAdmin(quantity: number = 1): Promise<IAdmin[]> {
		await this._sync();

		let users: IAdmin[] = [];
		let counter = 0;

		while (counter < quantity) {
			const user: IAdmin = {
				firebase_id: Faker.random.uuid(),
				user_type: 'admin',
				first_name: Faker.name.firstName(),
				last_name: Faker.name.lastName(),
				email: Faker.internet.email()
			};

			const result = await UserModel.create(user);
			users.push(result.dataValues);

			counter++;
		}

		return users;
	}

	public async createOwner(quantity: number = 1): Promise<IOwner[]> {
		await this._sync();

		let users: IOwner[] = [];
		let counter = 0;

		while (counter < quantity) {
			const user: IOwner = {
				firebase_id: Faker.random.uuid(),
				user_type: 'owner',
				first_name: Faker.name.firstName(),
				last_name: Faker.name.lastName(),
				email: Faker.internet.email(),
				date_of_birth: Faker.date.past(Faker.random.number({ min: 18, max: 65 })),
				main_phone: Faker.phone.phoneNumber(),
				address_line1: Faker.address.streetAddress(),
				post_code: Faker.address.zipCode(),
				city: Faker.address.city(),
				country: Faker.address.country()
			};

			const result = await UserModel.create(user);
			users.push(result.dataValues);

			counter++;
		}

		return users;
	}

	public async createBarber(shopId: number, quantity: number = 1): Promise<IBarber[]> {
		await this._sync();

		let users: IBarber[] = [];
		let counter = 0;

		while (counter < quantity) {
			const user: IBarber = {
				firebase_id: Faker.random.uuid(),
				shop_id: shopId,
				user_type: 'barber',
				first_name: Faker.name.firstName(),
				last_name: Faker.name.lastName(),
				email: Faker.internet.email(),
				main_phone: Faker.phone.phoneNumber()
			};

			const result = await UserModel.create(user);
			users.push(result.dataValues);

			counter++;
		}

		return users;
	}

	public async createCustomer(quantity: number = 1): Promise<ICustomer[]> {
		await this._sync();

		let users: ICustomer[] = [];
		let counter = 0;

		while (counter < quantity) {
			const user: ICustomer = {
				firebase_id: Faker.random.uuid(),
				user_type: 'customer',
				first_name: Faker.name.firstName(),
				last_name: Faker.name.lastName(),
				email: Faker.internet.email(),
				main_phone: Faker.phone.phoneNumber()
			};

			const result = await UserModel.create(user);
			users.push(result.dataValues);

			counter++;
		}

		return users;
	}

	public async createShop(ownerId: number, quantity: number = 1) {
		await this._sync();

		let shops: IShop[] = [];
		let counter = 0;

		while (counter < quantity) {
			const shop: IShop = {
				owner_id: ownerId,
				name: Faker.company.companyName(),
				email: Faker.internet.email(),
				phone_number: Faker.phone.phoneNumber(),
				address_line1: Faker.address.streetAddress(),
				post_code: Faker.address.zipCode(),
				city: Faker.address.city(),
				country: Faker.address.country(),
				created_by: ownerId,
				updated_by: ownerId
			};

			const result = await ShopModel.create(shop);
			shops.push(result.dataValues);

			counter++;
		}

		return shops;
	}

	public async createService(ownerId: number, shopId: number, quantity: number = 1) {
		await this._sync();

		let services: IService[] = [];
		let counter = 0;

		while (counter < quantity) {
			const service: IService = {
				ownerId,
				shop_id: shopId,
				name: Faker.company.companyName(),
				description: Faker.lorem.sentence(10),
				duration: 30,
				amount: +Faker.finance.amount(8, 30, 2),
				created_by: ownerId,
				updated_by: ownerId
			};

			const result = await ServiceModel.create(service);
			services.push(result.dataValues);

			counter++;
		}

		return services;
	}

	public async createBooking(
		customerId: number,
		shopId: number,
		barberId: number,
		serviceId: number,
		serviceAmount: number,
		quantity: number = 1
	) {
		await this._sync();

		let customerBookings: ICustomerBooking[] = [];
		let counter = 0;

		while (counter < quantity) {
			const customerBooking: ICustomerBooking = {
				customer_id: customerId,
				shop_id: shopId,
				barber_id: barberId,
				service_id: serviceId,
				status: 'Received',
				booking_date: Faker.date.recent(-1),
				amount: serviceAmount,
				booking_fee: 1.50,
				comment: Faker.lorem.sentence(10),
				created_by: customerId,
				updated_by: customerId,
			};

			const result = await CustomerBookingModel.create(customerBooking);
			customerBookings.push(result.dataValues);

			counter++;
		}

		return customerBookings;
	}
}

// const dataGeneratorController = new DataGeneratorController();
//
// dataGeneratorController.createOwner(4).then(result => {
// 	result.forEach(owner => {
// 		dataGeneratorController.createShop(owner.user_id, 2).then(() => {
// 			console.log('Data generated!');
// 		})
// 	})
// });

// dataGeneratorController.createService(2, 1, 4).then(async (res) => {
// 	res.forEach(service => {
// 		dataGeneratorController.createBooking(
// 			4, 1, 3, service.ser_id, service.amount
// 		)
// 	})
// })
