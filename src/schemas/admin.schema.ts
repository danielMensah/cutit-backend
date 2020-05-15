import { gql } from 'apollo-server';

export default gql`
    type Admin {
        user_id: ID!,
        firebase_id: String!,
        user_type: String!,
        first_name: String!,
        last_name: String!,
        email: String!,
        created_at: String,
        updated_at: String
    }
`;
