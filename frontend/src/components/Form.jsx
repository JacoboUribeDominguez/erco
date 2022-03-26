import React, { useContext } from 'react'
import { CITY, COUNTRY, STATE } from '../constants/constants';
import { Context } from '../context/contex';
import "../styles/form.css";
import Select from './Select';
import Wave from '../assets/wave.svg'
import Result from './Result';

const Form = () => {

  const context = useContext(Context);
  const {
    countries,
    states,
    cities
  } = context;

  return (
    <div className="form-container">
        <div className="form-title-container">
            <h1 className="form-title mb-5">¡Busquemos la población!</h1>
        </div>
        <div className="form">
          <Select 
            type={COUNTRY} 
            list={countries} 
            message={"- Selecciona un país -"}
          />
          <Select 
            type={STATE} 
            list={states}
            message={"- Selecciona un estado -"}
          />
          <Select 
            type={CITY} 
            list={cities}
            message={"- Selecciona una ciudad -"}
          />
        </div>
        <Result />
        <div className="wave-container">
          <img className="wave" src={Wave} alt="wave" />
        </div>
    </div>
  )
}

export default Form