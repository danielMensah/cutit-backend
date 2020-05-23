import 'mocha';
import { expect } from 'chai';
import { IShop, IShopAvailability } from '../models/shop.model';
import ShopController from '../controllers/shop.controller';
import DataGeneratorController from '../controllers/data-generator.controller';
import OwnerController from '../controllers/owner.controller';
import * as Faker from 'faker/locale/en_GB';

const shopController = new ShopController();
const ownerController = new OwnerController();
const dataGeneratorController = new DataGeneratorController();

describe('Shop', () => {
	before(() => {
		dataGeneratorController._sync(process.env.TEST_DATABASE_URL, true);
	})

	it('should create a new shop', async() => {
		const owner = await dataGeneratorController.createOwner();

		const shop: IShop = {
			owner_id: owner[0].user_id,
			name: Faker.company.companyName(),
			phone_number: Faker.phone.phoneNumber(),
			email: Faker.internet.email(),
			address_line1: Faker.address.streetAddress(),
			city: Faker.address.city(),
			country: Faker.address.country(),
			post_code: Faker.address.zipCode()
		};

		const result = await ownerController.createShop(shop);

		expect(result).to.not.be.null;
		expect(result).to.be.an('object');
		expect(result.name).to.equals(shop.name);
	});

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
