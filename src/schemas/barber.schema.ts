import { gql } from 'apollo-server';

export default gql`
    type Barber {
        user_id: ID!,
        shop_id: ID!,
        firebase_id: String!,
        user_type: String!,
        first_name: String!,
        last_name: String!,
        email: String!,
        main_phone: String!,
        created_at: String,
        updated_at: String
    }
`;
