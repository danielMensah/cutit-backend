import * as path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import UserController from './controllers/user.controller';
import BarberController from './controllers/barber.controller';
import CustomerController from './controllers/customer.controller';
import OwnerController from './controllers/owner.controller';
import ShopController from './controllers/shop.controller';
import { ApolloServerExpressConfig } from 'apollo-server-express';

const typesArray = fileLoader(path.join(__dirname, './schemas'));
const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

const typeDefs = mergeTypes(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

const dataSources = () => ({
	barberController: new BarberController(),
	customerController: new CustomerController(),
	ownerController: new OwnerController(),
	userController: new UserController(),
	shopController: new ShopController()
});

export default {
	typeDefs,
	resolvers,
	dataSources
} as ApolloServerExpressConfig
