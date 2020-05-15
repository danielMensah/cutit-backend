import { RESTDataSource } from 'apollo-datasource-rest';
import { Static } from '../factories/user.factory';

export default class BarberController extends RESTDataSource {
	public model: Static;

	init(model: Static) {
		this.model = model;
	}

	public async createAvailability(data): Promise<{}> {
		throw new Error('Not setup');
	}

	public async setAvailability(id: number) {
		throw new Error('Not setup');
	}

	public async getAllBookingsForBarber(barberId: number) {
		throw new Error('Not setup');
	}

	public async getCurrentBookingsForBarber(barberId: number) {
		throw new Error('Not setup');
	}
}
