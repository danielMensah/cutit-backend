import { Static } from '../factories/shop.factory';
import { ShopAvailabilityModel, ShopModel, UserModel } from '../factories';
import * as Sequelize from 'sequelize';
import { RESTDataSource } from 'apollo-datasource-rest';
import { IAvailability, IShop, IShopAvailability, IShopDetails } from '../models/shop.model';

const DAYS_OF_WEEK = [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default class ShopController  {
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

	public async createAvailability(ownerId: number, data: IShopAvailability): Promise<IShopAvailability> {
		const shop_av: IShopAvailability = {
			...data,
			created_by: ownerId,
			updated_by: ownerId
		};

		const result = await ShopAvailabilityModel.create(shop_av);
		return result.dataValues;
	}

	public async getShopDetails(shopId: number): Promise<IShopDetails> {
		const result = await ShopAvailabilityModel.findByPk(shopId, {
			include: ['shop_availability_shop']
		});

		const data: IShopAvailability = result.dataValues;

		let barbers = await UserModel.findAll({ where: { shop_id: data.shop_id } });
		barbers = barbers.map(barber => barber.dataValues);

		const shop_availability = this._getAvailabilities(data);

		return {
			shop_id: data.shop_id,
			name: data.shop_availability_shop.name,
			email: data.shop_availability_shop.email,
			barbers,
			shop_availability
		}
	}

	public _getAvailabilities(data: IShopAvailability): IAvailability[] {
		const regex: RegExp = /^day[1-7]$/;

		let returnData: IAvailability[] = [];

		for (let [key, value] of Object.entries(data)) {
			if (regex.test(key)) {
				const time = value !== 'Closed' ? value.split('-').map(time => time.trim()) : [null, null];
				const day = key.match(/[1-7]/)[0];

				returnData.push(
					{
						day: DAYS_OF_WEEK[day],
						f: time[0],
						t: time[1]
					}
				)
			}
		}

		return returnData;
	}
}
