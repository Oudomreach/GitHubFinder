import React from "react";
import Logo from "./components/Logo";
import { Route, Routes, useNavigate } from "react-router";
import Users from "./Routes/Users";
import UserInfo from "./Routes/UserInfo";
import { Link } from "react-router-dom";
// import FetchApi from "./API/FetchApi";

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-gray-300">
        <div onClick={() => navigate('/')} className="text-white py-3 bg-purple-500">
          <Link>
            <Logo />
          </Link>
          
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Users />}> </Route>
          <Route path="/:name" element={<UserInfo />}> </Route>
        </Routes>
      </div>
      </div>
      
    </>
  )
}

export default App
