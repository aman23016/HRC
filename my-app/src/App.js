import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Main from "./MainBody";

import { ReactComponent as Hrc } from "./assets/logo.svg";
import { ReactComponent as Company } from "./assets/ABCLogoFull.svg";

function App(){
    
  return (
    <div>
      <div>
        <Company id="companylogo"/>
        <Hrc id='hrclogo'/>
        <p style={{
            fontFamily: "sans-serif",
            color: "white",
            marginLeft:"16px",
            marginBottom:"0px",
            fontWeight: "bold",
            fontSize:"1.5em"
          }}>Invoice List</p>
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}


export default App