
import React, { useState } from "react";
// core components
import DemoNavbar from "../components/DemoNavbar";
import { PublicHome } from "./PublicHome";

const HomePage = () =>{

  const user  = window.sessionStorage.getItem('logedin')
    const[render, setRender] = useState(Date.now)

    const reRender = () => {
      setRender(Date.now)
    }

    return (
      <>
        <DemoNavbar isLoggedIn={user} login = {reRender}/>
        <PublicHome user={user}/>
      </>
    );
}

export default HomePage;
