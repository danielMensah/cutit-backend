import { RESTDataSource } from 'apollo-datasource-rest';
import { UserModel } from '../factories';
import { userTypes } from '../types';
import { Static } from '../factories/user.factory';

export default class UserController  {
	model: Static = UserModel;

	public async getUser<T>(id: number): Promise<T> {
		return this.model.findByPk(id);
	}

	public async getUsers<T>(type: userTypes): Promise<T[]> {
		return this.model.findAll({ where: { user_type: type } });
	}

	public async createUser<T>(data): Promise<T> {
		return this.model.create(data);
	}

	public async updateUser(id: number, data) {
		const user = await this.model.findByPk(id);
		return user.update(data)
	}

}
