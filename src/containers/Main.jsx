import React from "react";
import { useState } from "react";
import { Greetings } from "../components/Greeting";
import { TodoForm } from "../components/TodoForm";
import { List } from "../components/List";
import './Main.css'


const Main = () => {
    
    return(
        <>
            <Greetings/>
            <TodoForm/>
            <List/>
        </>
    )
}

export default Main