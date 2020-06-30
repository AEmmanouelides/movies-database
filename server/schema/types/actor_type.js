const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Actor = mongoose.model('actor');

const ActorType = new GraphQLObjectType({
  name:  'ActorType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    name: { type: GraphQLString },
    movie: {
      type: require('./movie_type'),
      resolve(parentValue) {
        return Actor.findById(parentValue).populate('movie')
          .then(actor => {
            return actor.movie
          });
      }
    }
  })
});

module.exports = ActorType;
