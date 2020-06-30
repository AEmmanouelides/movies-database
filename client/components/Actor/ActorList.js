import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import mutation from '../../mutations/LikeActor'

class ActorList extends Component {

    onLike(id, likes){
        this.props.mutate({
            variables: { id },
            optimisticResponse: {
                __typename: 'Mutation',
                likeActor: {
                    id,
                    __typename: 'ActorType',
                    likes: likes + 1
                }
            }
        })
    }

    displayActors() {
        return this.props.actors.map(({ id, name, likes }) => {
            return (
                <li key={id} className='collection-item'>
                    {name}
                    <div className='vote-box'>
                    <i 
                        className="material-icons"
                        onClick={() => this.onLike(id, likes)}>
                            thumb_up</i>
                            <span className='likes'>{ likes }</span>
                    </div>
                </li>

            )
        })
    }

    render () {

        return (<div>
        <ul className='collection'>
            {this.displayActors()}
        </ul>
        </div>
        )
    }
}

export default graphql(mutation)(ActorList);