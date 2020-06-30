import React, { Component } from 'react'
import AuthForm from './AuthForm'
import mutation from '../../mutations/Signup'
import { graphql } from 'react-apollo'
import query from '../../queries/currentUser'
import { hashHistory } from 'react-router'

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/movies')
        }
    }

    onSubmit = ({ email, password }) => {
        this.props.mutate({
            variables: {
                email,
                password
            },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({ errors })
        });
    }

    render() {
     
        return (<div className='center'>
            <h3>Sign Up</h3>
            <AuthForm 
                onSubmit={this.onSubmit} 
                errors={this.state.errors}
                page='Sign Up'
            />
        </div>)
    }
}

export default graphql(query)(graphql(mutation)(SignupForm))