import * as sequelize from "sequelize";
import { UserFactory } from "./user.factory";
import { BarberAvailabilityFactory } from './barber_availability.factory';
import { CustomerBookingFactory } from './customer_booking.factory';
import { ServiceFactory } from './service.factory';
import { ShopFactory } from './shop.factory';
import { ShopAvailabilityFactory } from './shop_availability.factory';
import sqlConfig from '../utils/sqlConfig';

export const dbConfig = new sequelize.Sequelize('postgres://ytgpabwaislipg:5da0f2d2c7fa21d19c087f8e9e75980249bbc9be11ddc478d9cff6d2eafe8301@ec2-54-247-89-181.eu-west-1.compute.amazonaws.com:5432/d2kflm7gum4g90', sqlConfig);

export const UserModel = UserFactory(dbConfig);
export const BarberAvailabilityModel = BarberAvailabilityFactory(dbConfig);
export const CustomerBookingModel = CustomerBookingFactory(dbConfig);
export const ServiceModel = ServiceFactory(dbConfig);
export const ShopModel = ShopFactory(dbConfig);
export const ShopAvailabilityModel = ShopAvailabilityFactory(dbConfig);

UserModel.hasMany(BarberAvailabilityModel, {
	foreignKey: 'barber_id',
	as: 'barber_availabilities',
	onDelete: 'CASCADE',
});

UserModel.hasMany(CustomerBookingModel, {
	foreignKey: 'barber_id',
	as: 'barber_bookings'
});

UserModel.hasMany(CustomerBookingModel, {
	foreignKey: 'customer_id',
	as: 'customer_booking_bookings',
	onDelete: 'CASCADE',
});

UserModel.hasMany(ShopModel, {
	foreignKey: 'owner_id',
	as: 'owner_shops',
	onDelete: 'CASCADE',
});

BarberAvailabilityModel.belongsTo(UserModel, {
	foreignKey: 'barber_id',
	as: 'barber'
});

CustomerBookingModel.belongsTo(UserModel, {
	foreignKey: 'customer_id',
	as: 'customer_booking_customer'
});

CustomerBookingModel.belongsTo(UserModel, {
	foreignKey: 'barber_id',
	as: 'customer_booking_barber'
});

CustomerBookingModel.belongsTo(ShopModel, {
	foreignKey: 'shop_id',
	as: 'customer_booking_shop'
});

CustomerBookingModel.belongsTo(ServiceModel, {
	foreignKey: 'service_id',
	as: 'customer_booking_service'
});

ServiceModel.belongsTo(ShopModel, {
	foreignKey: 'shop_id',
	as: 'service_shop'
});

ServiceModel.hasMany(CustomerBookingModel, {
	foreignKey: 'service_id',
	as: 'service_bookings'
});

ShopModel.belongsTo(UserModel, {
	foreignKey: 'owner_id',
	as: 'shop_owner'
});

ShopModel.hasMany(CustomerBookingModel, {
	foreignKey: 'shop_id',
	as: 'shop_bookings',
	onDelete: 'CASCADE',
});

ShopModel.hasMany(ServiceModel, {
	foreignKey: 'shop_id',
	as: 'shop_services',
	onDelete: 'CASCADE',
});

// ShopModel.hasMany(UserModel, {
// 	foreignKey: 'shop_id',
// 	as: 'shop_barbers',
// 	onDelete: 'CASCADE',
// });
//
ShopModel.hasOne(ShopAvailabilityModel, {
	foreignKey: 'shop_id',
	as: 'shop_availability',
	onDelete: 'CASCADE',
});

ShopAvailabilityModel.belongsTo(ShopModel, {
	foreignKey: 'shop_id',
	as: 'shop_availability_shop'
});
