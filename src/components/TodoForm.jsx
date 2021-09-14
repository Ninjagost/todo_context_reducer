import React from "react"
import { UserConsumer } from "../context/UserContext"

export const TodoForm = () =>{
    return(
        <UserConsumer>
            {({user, handleSubmit, name, addName, handleTitleChange}) => 
            <div className="form__todo">
              <form onSubmit={handleSubmit} handleTitleChange={handleTitleChange}>
                  <input type="text" onChange={handleTitleChange} value={addName.names.post} />
                  <button>add</button>
              </form> 
            </div>
            }
        </UserConsumer>
    )
}

