import { gql } from 'apollo-server';

export default gql`    
    type Query {
        admins: [Admin]!
        admin(id: ID!): Admin!

        owners: [Owner]!
        owner(id: ID!): Owner!

        barbers: [Barber]!
        barber(id: ID!): Barber!

        customers: [Customer]!
        customer(id: ID!): Customer!

        customerBookings(customerId: ID!): [CustomerBooking]
        customerBooking(bookingId: ID!): CustomerBooking
        
        shopList(searchTerm: String): [Shop]
    }
    type Mutation {
        createCustomer(
            firebase_id: String!,
            user_type: String!,
            first_name: String!,
            last_name: String!,
            email: String!,
            main_phone: String!
        ): Customer!

        createAdmin(
            firebase_id: String!, user_type: String!, first_name: String!, last_name: String!, email: String!
        ): Admin!

        createOwner(
            firebase_id: String!,
            user_type: String!,
            first_name: String!,
            last_name: String!,
            email: String!,
            date_of_birth: String!,
            main_phone: String!,
            address_line1: String!,
            address_line2: String,
            post_code: String!,
            city: String!,
            country: String!
        ): Owner!

        createShop(
            owner_id: Int!,
            name: String!,
            email: String!,
            phone_number: String!,
            address_line1: String!,
            address_line2: String,
            post_code: String!,
            city: String!,
            country: String!
        ): Shop!

        addBarber(
            firebase_id: String!,
            user_type: String!,
            first_name: String!,
            last_name: String!,
            email: String!,
            main_phone: String!
        ): Barber!

        createBooking(
            customer_id: Int!,
            shop_id: Int!,
            barber_id: Int!,
            service_id: Int!,
            status: String!,
            booking_date: String!,
            amount: Float!,
            booking_fee: Float!,
            comment: String
        ): CustomerBooking!
        
        createService(
        	  ownerId: Int!,
            shop_id: Int!,
            name: String!,
            description: String,
            duration: Int!,
            amount: Float!
        ): Service!
    }
`;
