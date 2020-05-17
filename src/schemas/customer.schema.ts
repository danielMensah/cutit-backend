import { gql } from 'apollo-server';

export default gql`
    type Customer {
        user_id: ID!,
        firebase_id: String!,
        user_type: String!,
        first_name: String!,
        last_name: String!,
        email: String!,
        main_phone: String!,
        created_at: String,
        updated_at: String
    }
	
		type CustomerBooking {
        id: ID!,
        shopId: Int!,
        shop: String!,
        barberId: Int!,
        barber: String!,
        barber_img: String!,
        serviceId: Int!,
        service: String!,
        comment: String!,
        date: String!,
        amount: Float!,
        bookingFee: Float!,
        total: Float!
		}
	
#		type CustomerBooking {
#        bok_id: ID!,
#        customer_id: Int!,
#        shop_id: Int!,
#        barber_id: Int!,
#        service_id: Int!,
#        status: String!,
#        booking_date: String!,
#        amount: Float!,
#        booking_fee: Float!,
#        comment: String,
#        created_at: String,
#        created_by: Int,
#        updated_at: String,
#        updated_by: Int,
#        customer_booking_customer: Customer!,
#        customer_booking_barber: Barber!,
#        customer_booking_shop: Shop!
#		}
`;
