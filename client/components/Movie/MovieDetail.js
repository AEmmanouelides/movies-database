import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchMovie from '../../queries/fetchMovie'
import { Link } from 'react-router'
import ActorCreate from '../Actor/ActorCreate'
import ActorList from '../Actor/ActorList'

class MovieDetail extends Component {

    render() {
        const { movie } = this.props.data;

        if (!movie) { return <div>Loading...</div> }

        return (<div>
            <span className='backLink'><Link to='/movies'>Back</Link></span>
            <h3 className='center'>{movie.title}</h3>
            {
                this.props.data.movie && 
                this.props.data.movie.actors && 
                this.props.data.movie.actors.length !== 0 &&
                (
                <div>            
                    <h5 className='mt-30'>Cast</h5>
                    <ActorList actors={movie.actors}/>
                </div>
                )
            }
            <ActorCreate movieId={this.props.params.id}/>
        </div>)
    }
}

export default graphql(fetchMovie, {
    options: (props) => {
        return {
            variables: { id: props.params.id }
        }
    }
})(MovieDetail)