import gql from 'graphql-tag'

export default gql`
    mutation AddMovie($title: String){
        addMovie(title: $title) {
            id
            title
        }
    }
`;
