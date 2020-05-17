import 'mocha';
import { expect } from 'chai';
import { IShopAvailability } from '../models/shop.model';
import ShopController from '../controllers/shop.controller';

const shopController = new ShopController();

describe('Shop', () => {
	it('should return formatted availability', function () {
		const shop_av: IShopAvailability = {
			shop_id: 1,
			day1: '09:00 - 17:00',
			day2: '09:00 - 17:00',
			day3: '09:00 - 17:00',
			day4: '09:00 - 17:00',
			day5: '09:00 - 17:00',
			day6: 'Closed',
			day7: 'Closed'
		};

		const result = shopController._getAvailabilities(shop_av);

		expect(result).to.be.an('array');

		expect(result[0].day).to.equals('Mon');
		expect(result[0].f).to.equals('09:00');
		expect(result[0].t).to.equals('17:00');

		expect(result[6].day).to.equals('Sun');
		expect(result[6].f).to.be.null;
		expect(result[6].t).to.be.null;
	});
})
