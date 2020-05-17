import { Static } from '../factories/user.factory';
import { ServiceModel, ShopModel } from '../factories';
import * as _ from 'lodash';
import { RESTDataSource } from 'apollo-datasource-rest';
import { IShop } from '../models/shop.model';

export interface IService {
	// used only for when creating a new service
	ownerId?: number;

	ser_id?: number;
	shop_id: number;
	name: string;
	description?: string;
	duration: number;
	amount: number;
	created_at?: Date;
	created_by?: number;
	updated_at?: Date;
	updated_by?: number;
}

export default class OwnerController  {
	model: Static = ShopModel;

	init(model: Static) {
		this.model = model;
	}

	public async getShops(ownerId: number): Promise<IShop[]> {
		return this.model.findAll({ where: { owner_id: ownerId } });
	}

	public async createShop(shopData: IShop): Promise<IShop> {
		const shop = {
			...shopData,
			created_by: shopData.owner_id,
			updated_by: shopData.owner_id
		};

		const x = await this.model.create(shop);
		return x.dataValues;
	}

	// Barber model
	public async getBarbers(shopId: number): Promise<any[]> {
		return this.model.findAll({ where: { shop_id: shopId } });
	}

	public async addBarber(barberData): Promise<{}> {
		throw new Error('Not setup');
	}

	public async getServices(shopId: number): Promise<{}> {
		throw new Error('Not setup');
	}

	public async createService(serviceData: IService): Promise<IService> {
		serviceData.created_by = serviceData.ownerId;
		serviceData.updated_by = serviceData.ownerId;

		const service = _.omit(serviceData, 'ownerId');

		const x = await ServiceModel.create(service);
		return x.dataValues;
	}
}
