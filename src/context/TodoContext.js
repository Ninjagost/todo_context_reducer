import React, {createContext, useState} from "react";

const { FormProvider, ForConsumer } = createContext()

const TodoProvider = (props) => {
   
    return(
        <FormProvider value={{
           
        }}>
            {props.children}
        </FormProvider>
    )

}

export{ TodoProvider as default, ForConsumer as FormCosnumer }