import React, { useState } from 'react'
import { UserConsumer } from '../context/UserContext'
import './Login.css'

const Login = ({handleLogin}) => {
        return(
    <UserConsumer>
        {({user, handleLogin, handleNameChange, handlePasswordChange, name, password}) => <form className='Login' onSubmit={handleLogin}>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              name='username'
              value={name}
              onChange={handleNameChange}
              required
              />
    
            <label htmlFor='password'>Password</label>
            <input
              id='text'
              name='text'
              type='text'
              password={password}
              onChange={handlePasswordChange}
              required
              />
    
            <button type='submit'> Login </button>
      </form>}
    </UserConsumer>
    )
}

export default Login