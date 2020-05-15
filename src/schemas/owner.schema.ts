import { gql } from 'apollo-server';

export default gql`
    type Owner {
        user_id: ID!,
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
        country: String!,
        created_at: String,
        updated_at: String
    }
    
    type Service {
        ser_id: ID!,
        shop_id: Int!,
        name: String!,
        description: String,
        duration: Int!,
        amount: Float!
        created_at: String,
        created_by: Int,
        updated_at: String,
        updated_by: Int
    }
`;
