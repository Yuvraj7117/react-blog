import React from 'react';
import {BiError} from "react-icons/bi"
import "./error.css";


const Errors = () => {
  return (
    <>
      <div className='container'>
          <h2><BiError/></h2>
          <h1>404 ERROR PAGE</h1>
          <p>Oops... Something Went Wrong</p>
          
      </div>
      <h3 className='back'>GO BACK</h3>
    </>
  )
}

export default Errors