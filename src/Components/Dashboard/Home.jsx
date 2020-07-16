import React from 'react';
import Header from "../../Comman/Header";

function Home() {
  const loginUserEmail = sessionStorage.getItem("loginUser");
  const loginUser = loginUserEmail.substring(0, loginUserEmail.lastIndexOf("@"));
  return (
    <>
     <Header/>
     <div className="user-block">
       <h4>{`${"Hello "}${loginUser}`} </h4>
       <h5>Let's manage Product List </h5>
       <i className="product-icon fa fa-pencil-square-o"></i>
       
     </div>
     </>
  );
}

export default Home;
