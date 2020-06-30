import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import query from '../../queries/fetchMovies'
import mutation from '../../mutations/AddMovie'

class MovieCreate extends Component {

    constructor(props) {
        super(props);

        this.state = { title: ''};
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query
            }]
        }).then(() => hashHistory.push('/movies'));
    }

    render() {
        return (
            <div className='row'>
                <span className='backLink'><Link to='/movies'>Back</Link></span>
                <div className='center'>
                <h3>Create a New Movie</h3>
                <form className='col l4 push-l4 m8 push-m2 s8 push-s2'>
                    <input 
                        placeholder='Movie Title'
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title} />
                    <button 
                        onClick={this.onSubmit}
                        className='btn-floating btn-large red right'>
                            <i className='material-icons'>save</i>
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

export default graphql(mutation)(MovieCreate);