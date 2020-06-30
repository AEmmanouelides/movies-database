import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { Link } from 'react-router'
import query from '../../queries/fetchMovies'
import mutation from '../../mutations/DeleteMovie'

class MovieList extends Component {

    onMovieDelete(id) {
        this.props.mutate({
            variables: {
                id
            }
        }).then(() => this.props.data.refetch())
    }
     
    displayMovies() {

        return this.props.data.movies.map(({id, title}) => {
            return (
                <li key={id} className='collection-item'>
                    <Link to={`/movies/${id}`}>
                    {title}
                    </Link>
                    <i className='material-icons'
                       onClick={() => this.onMovieDelete(id)}>
                        delete
                    </i>
                </li>
            )
        })
    }

    render () {
        if (this.props.data.loading) {
            return <div>Loading...</div>
        }

        return (<div className='center'>
        <h3>Movies</h3>
        <ul className='collection'>
            {this.displayMovies()}
        </ul>
        <Link
            to='/movies/new'
            className='btn-floating btn-large red right'>
            <i className='material-icons'>add</i>
        </Link>
        </div>)
    }
}

export default graphql(mutation)(
    graphql(query)(MovieList));