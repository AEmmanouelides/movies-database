import gql from 'graphql-tag'

export default gql`
    mutation LikeActor($id: ID) {
        likeActor(id: $id) {
            id
            likes
        }
    }
`;
