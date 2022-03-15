import  { useContext, createContext, useState } from 'react';

//Auth Context
export const AuthContext = createContext(null)

//Use Auth Context
export function useAuthContext() {

    return useContext(AuthContext);
}
