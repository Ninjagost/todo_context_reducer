import React, {createContext, useState, useReducer} from 'react'
import namesReducer from '../reducers';
import { v4 as uuid } from "uuid";
const { Provider, Consumer } = createContext()

const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        setLoggedInUser({name: name, password: password})
    }

    const handleNameChange = (event) => setName(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)








    const [addName, setAddname] = useReducer(namesReducer, {
        names: { post: "", id: "" },
        allNames: []
    })

    const handleTitleChange = (event) => {
        setAddname({
          type: "NEW_NAME",
          payload: { post: event.target.value, id: uuid() }
        });
    };

    
    const handleSubmit = (event) => {
      event.preventDefault();
      setAddname({
        type: "PUSH_NAME",
        payload: [...addName.allNames, addName.names]
      });
    };


    return(
        <Provider value={{
            user: loggedInUser,
            handleSubmit,
            handleTitleChange,
            handleLogin,
            handleNameChange,
            handlePasswordChange,
            addName,
            name,
            password
        }}>
            {props.children}
        </Provider>
    )
}

export{ UserProvider as default, Consumer as UserConsumer }