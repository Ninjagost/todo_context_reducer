import React from "react"
import { UserConsumer } from "../context/UserContext"

export const List = () =>{
    return(
        <>
        <UserConsumer>
            {({addName}) =>
            <div>
                {addName.allNames.map((el) => (
                    <div key={el.id}>
                      <h2>{el.post}</h2>
                      <button>DELETE</button>
                    </div>
                ))}
            </div>
            }
        </UserConsumer>
        </>
    )
}