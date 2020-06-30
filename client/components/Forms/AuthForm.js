import React from 'react'

class AuthForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { email: '', password: '' }
    }

    onFormSubmit = () => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.onSubmit({ email, password });
    };

    fieldsValidation = () => {
    
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/;
        const emailField = this.state.email
        const passwordField = this.state.password

        return emailField.length > 0 && passwordField.length > 3 && emailRegex.test(emailField)
    };

    render() {
     
        return (<div className='row'>
            <form className='col l4 push-l4 m8 push-m2 s8 push-s2'>
            <div className='input-field'>
                <input 
                    required
                    type='email'
                    placeholder='Email*'
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                />
            </div>
            <div className='input-field'>
                <input 
                  required
                  placeholder='Password*'
                  type='password'
                  minLength='4'
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
            </div>
            {
                <div className='errors'>
                {
                    this.props.errors.map(error => 
                    <div key={error}>{ error }</div>)
                }
                </div>
            }
            <button 
                type='button' 
                className='btn' 
                disabled={!this.fieldsValidation()} 
                onClick={this.onFormSubmit}>
                    {this.props.page}
            </button>
        </form>
    </div>)
    }
}

export default AuthForm