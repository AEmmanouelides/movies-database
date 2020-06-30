import gql from 'graphql-tag'

export default gql`
    query movieQuery($id: ID!) {
        movie(id: $id) {
            id
            title
            actors {
                id
                name
                likes
            }
        }
    } 
`;
