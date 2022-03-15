import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Container from "./components/OPS/Container";
import { AuthContext } from "./components/tools/Context/useAuth";
import { useState } from "react";
import Nav from "./components/layout/Nav";
import Routes from "./routes/data";

function App() {
  const [token, setToken] = useState("no token");
  const [data, setData] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        data,setData
      }}
    >
    <Routes></Routes>
    </AuthContext.Provider>
  );
}

export default App;
