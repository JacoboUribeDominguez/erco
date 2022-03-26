import React, { useContext } from 'react'
import { Context } from '../context/contex';
import "../styles/result.css";

const Result = () => {

  const {
    poblation
  } = useContext(Context);

  return (
    <div className={poblation ? "result-container" : "result-container d-none"}>
      <h4>Población</h4>
      <div className="result">
        {poblation}
      </div>
    </div>
  )
}

export default Result