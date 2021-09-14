import React from "react"
import { UserConsumer } from "../context/UserContext"

export const Greetings = () => {
    return(

        <UserConsumer>
        {({user, name, password}) => 
            <div className=""> 
                <h1>Welcome {name}</h1> 
                <h3>Password is: {password}</h3>
            </div>  }
        </UserConsumer>
    )
}