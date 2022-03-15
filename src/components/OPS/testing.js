import  { useState, createContext } from 'react'

const testing = () => {
    const UserContext = createContext()

    return(
        <UserContext.Provider value={{isAuth: true}} >
            <div>
                Hi 
            </div>
        </UserContext.Provider> 
    )
}