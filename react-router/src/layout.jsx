import React from "react";
import Footer from "./component/footer/footer";
import { Outlet } from "react-router-dom";
import Header from "./component/header/header";

function Layout(){
   return(
      <>
      <Header />
      <Outlet/>
      <Footer/>
      </>
   )
}

export default  Layout;