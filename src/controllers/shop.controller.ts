import { Static } from '../factories/shop.factory';
import { ShopModel } from '../factories';
import Sequelize from 'sequelize';
import { RESTDataSource } from 'apollo-datasource-rest';
import { IShop } from '../models/shop.model';

export class ShopController extends RESTDataSource {
	model: Static = ShopModel;

	public async getShops(searchTerm: string): Promise<IShop[]> {
		const result = await this.model.findAll({
			limit: 5,
			where: {
				name: {
					[Sequelize.Op.iLike]: `%${searchTerm}%`
				}
			}
		});

		return result.map(r => r.dataValues);
	}
}
