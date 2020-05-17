export default {
	Query: {
		admins: async (_, args, { dataSources }) => dataSources.userController.getUsers('admin'),
		admin: async (_, { id }, { dataSources }) => dataSources.userController.getUser(id),

		owners: async (_, args, { dataSources }) => dataSources.userController.getUsers('owner'),
		owner: async (_, { id }, { dataSources }) => dataSources.userController.getUser(id),

		barbers: async (_, args, { dataSources }) => dataSources.userController.getUsers('barber'),
		barber: async (_, { id }, { dataSources }) => dataSources.userController.getUser(id),

		customers: async (_, args, { dataSources }) => dataSources.userController.getUsers('customer'),
		customer: async (_, { id }, { dataSources }) => dataSources.userController.getUser(id),

		customerBookings: async (_, { customerId }, { dataSources }) => dataSources.customerController.getBookings(customerId),
		customerBooking: async (_, { bookingId }, { dataSources }) => dataSources.customerController.getBooking(bookingId),

		shopList: async (_, { searchTerm }, { dataSources }) => dataSources.shopController.getShops(searchTerm),
		shopDetails: async (_, { shopId }, { dataSources }) => dataSources.shopController.getShopDetails(shopId)
	},
	Mutation: {
		addBarber: async (_, userData, { dataSources }) => dataSources.userController.createUser(userData),
		createAdmin: async (_, userData, { dataSources }) => dataSources.userController.createUser(userData),
		createOwner: async (_, userData, { dataSources }) => dataSources.userController.createUser(userData),
		createCustomer: async (_, userData, { dataSources }) => dataSources.userController.createUser(userData),
		createShop: async (_, shopData, { dataSources }) => dataSources.ownerController.createShop(shopData),
		createBooking: async (_, bookingData, { dataSources }) => dataSources.customerController.createBooking(bookingData),
		createService: async (_, serviceData, { dataSources }) => dataSources.ownerController.createService(serviceData)
	}
};
