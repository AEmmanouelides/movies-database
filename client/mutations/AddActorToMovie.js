import gql from 'graphql-tag'

export default gql`
    mutation AddActorToMovie($name: String, $movieId: ID) {
        addActorToMovie(name: $name, movieId: $movieId) {
            id
            actors {
                id
                name
                likes
            }
        }
    }`;
