import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../../queries/currentUser'
import { Link, hashHistory } from 'react-router'
import mutation from '../../mutations/Logout'

class Header extends Component {

    onLogoutClick = () => {
        this.props.mutate({
            refetchQueries: [{
                query
            }]
        }).then(() => hashHistory.push('/'));
    }

    displayButtons() {
        const { loading, user } = this.props.data;

        if (loading) { return <div>Loading...</div>}

        if (user) {
            return <div>
                <li className='moviesLink'>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li><a onClick={this.onLogoutClick}>Logout</a></li>
            </div>
            
        } else {
            return (
                <div>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </div>
            )
        }
    }

    render() {

        return (<nav>
            <div className='nav-wrapper'>
            <Link to='/' className='brand-logo left'>
            <i className='large material-icons'>home</i>
            </Link>

            <ul className='right'>
            {this.displayButtons()}
            </ul>

            </div>
        </nav>) 
    }
}



export default graphql(mutation)(graphql(query)(Header));