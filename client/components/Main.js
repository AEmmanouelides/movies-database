import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        if (this.props.data && !this.props.data.user && !!nextProps.data.user) {
            hashHistory.push('/movies')
        }
    }

    render() {
     
        return (<div className='center'>
            <h3>Welcome To Movies Database</h3>
            <img src='https://i.ibb.co/KxssBNH/cinema-2.jpg' alt='' className='responsive' />
        </div>)
    }
}

export default Main

