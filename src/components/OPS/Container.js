import { useContext } from "react";
import { AuthContext, useAuthContext } from "../tools/Context/useAuth";
import  Nav  from '../layout/Nav';

export default function Container() {
    const auth = useAuthContext()
    return(
        <>
        <div>
            <h1>Hi I'm {auth.token}r</h1>
        </div>
        </>
    )
}