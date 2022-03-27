import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import "../styles/result.css";

const Result = () => {

  const poblation = useSelector(state => state.places.poblation);

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