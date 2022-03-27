import React from 'react'

//constants
import { CITY, COUNTRY, STATE } from '../constants/constants';

//css
import "../styles/form.css";

//components
import Select from './Select';
import Result from './Result';

//images
import Wave from '../assets/wave.svg'

//redux
import { useSelector } from 'react-redux';

const Form = () => {

  const countries = useSelector(state => state.places.countries);
  const states = useSelector(state => state.places.states);
  const cities = useSelector(state => state.places.cities);

  return (
    <div className="form-container">
        <div className="form-title-container">
            <h1 className="form-title mb-5">¡Busquemos la población!</h1>
        </div>
        <div className="form">
          <Select 
            type={COUNTRY} 
            list={countries} 
          />
          <Select 
            type={STATE} 
            list={states}
          />
          <Select 
            type={CITY} 
            list={cities}
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