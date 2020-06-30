import React from 'react'
import Header from './Header/Header'

export default ({ children }) => {
    return (
        <div className='container'>
            <Header />
            {children}
        </div>)
}