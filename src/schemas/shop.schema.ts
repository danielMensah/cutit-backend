import { gql } from 'apollo-server';

export default gql`
    type Shop {
        sho_id: ID!,
        owner_id: Int!,
        name: String!,
        email: String!,
        phone_number: String!,
        address_line1: String!,
        address_line2: String,
        post_code: String!,
        city: String!,
        country: String!
    }
    type Availability {
        day: String!,
        f: String,
        t: String
    }
    type ShopDetails {
        shop_id: ID!,
        name: String!,
        email: String!,
        barbers: [Barber]!,
        shop_availability: [Availability]!
    }
`;
