import { Routes } from "react-router";
// import { Route } from "react-router";
import { BrowserRouter,Route } from "react-router-dom";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";
import { useAuthContext } from "../../components/tools/Context/useAuth";
import ProtectedRoute from "./ProtectedRoute";

export default function Routess() {
  const {user,setUser}=useAuthContext()
  return (
   <BrowserRouter>
   <Routes>
  {
    !user && <> <Route path="/login"
    element={<Login/>}
    />
       <Route path="/signup"
    element={<Signup/>}
    />
    </>
  }
   <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/' element={<h1>hey</h1>}/>
          </Route>
   
   </Routes>
     
   </BrowserRouter>
  );
}