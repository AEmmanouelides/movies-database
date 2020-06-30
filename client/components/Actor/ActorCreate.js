import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import mutation from '../../mutations/AddActorToMovie'

class ActorCreate extends Component {

    constructor(props) {
        super(props)

        this.state = { name: ''}
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.mutate({
            variables: {
                name: this.state.name,
                movieId: this.props.movieId
            }
        }).then(() => this.setState({name: ''}));
    }

    render () {
    

        return (<form className='mt-30'>
        <label>Add an Actor/Actress</label>
        <input 
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            />
        <button onClick={this.onSubmit}
                type='button'
                className='btn-floating btn-large red right'>
        <i className='material-icons'>save</i>
        </button>
        </form>
        )
    }
}

export default graphql(mutation)(ActorCreate);