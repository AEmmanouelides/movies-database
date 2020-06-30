const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Movie = mongoose.model('movie');
const Actor = mongoose.model('actor');
const MovieType = require('./types/movie_type');
const ActorType = require('./types/actor_type');
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req })
      }

    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req })
      }

    },
    addMovie: {
      type: MovieType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Movie({ title })).save()
      }
    },
    addActorToMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString },
        movieId: { type: GraphQLID }
      },
      resolve(parentValue, { name, movieId }) {
        return Movie.addActor(movieId, name);
      }
    },
    likeActor: {
      type: ActorType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Actor.like(id);
      }
    },
    deleteMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Movie.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
