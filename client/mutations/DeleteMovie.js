import gql from 'graphql-tag'

export default gql`
    mutation DeleteMovie($id: ID) {
        deleteMovie(id: $id) {
            id
        }
    }
`;