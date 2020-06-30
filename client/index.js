import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import MovieList from './components/Movie/MovieList'
import MovieCreate from './components/Movie/MovieCreate'
import MovieDetail from './components/Movie/MovieDetail'
import Main from './components/Main'
import LoginForm from './components/Forms/LoginForm'
import SignupForm from './components/Forms/SignupForm';
import requiredAuth from './auth/requireAuth'

import './style/style.css'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Main}/>
          <Route path='login' component={LoginForm}/>
          <Route path='signup' component={SignupForm}/>
          <Route path='movies' component={requiredAuth(MovieList)} />
          <Route path='movies/new' component={requiredAuth(MovieCreate)} />
          <Route path='movies/:id' component={requiredAuth(MovieDetail)} />
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
