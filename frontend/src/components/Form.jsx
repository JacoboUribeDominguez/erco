import React, { useContext, useState } from 'react'
import { Context } from '../context/contex';
import useFetch from '../hooks/useFetch';
import "../styles/form.css";

const Form = () => {

  const context = useContext(Context);
  const {
    countries,
    elementsActivated,
    ChangeAnElement,
    setStates
  } = context;

  const [countrySelect, setCountry] = useState(null);

  const {
    handleFetch
  } = useFetch();

  const handleClickOption = (country) => {
    ChangeAnElement('COUNTRY')
    const data = handleFetch(`http://localhost:3005/states/${country.id_country}`)
    setStates(data);
    setCountry(country.name_place)
  }

  return (
    <div className="form-container">
        <div className="form-title-container">
            <h1 className="form-title">¡Busquemos la población!</h1>
        </div>
        <div className="form">
            <div className="select-container">
                <div className="select-default" onClick={() => ChangeAnElement('COUNTRY')}>{countrySelect ? countrySelect : "- Selecciona un país -"}</div>
                {
                  (elementsActivated.country) && (
                    <div className="options-select">
                      {
                        countries.length > 0 ? (
                          countries.map(country => (
                            <div className="option-country" key={country.id_place} onClick={() => handleClickOption(country)}>
                              {country.name_place}
                            </div>
                          ))
                        ) : (
                          <div>espera un momento</div>
                        )
                      }
                    </div>
                  )
                }
            </div>
            <div className="select-container">
                <div className="select-default" onClick={() => ChangeAnElement('COUNTRY')}>{countrySelect ? countrySelect : "- Selecciona un estado -"}</div>
                {
                  (elementsActivated.country) && (
                    <div className="options-select">
                      {
                        countries.length > 0 ? (
                          countries.map(country => (
                            <div className="option-country" key={country.id_place} onClick={() => handleClickOption(country)}>
                              {country.name_place}
                            </div>
                          ))
                        ) : (
                          <div>espera un momento</div>
                        )
                      }
                    </div>
                  )
                }
            </div>
            <div className="select-container">
                <div className="select-default" onClick={() => ChangeAnElement('COUNTRY')}>{countrySelect ? countrySelect : "- Selecciona un país -"}</div>
                {
                  (elementsActivated.country) && (
                    <div className="options-select">
                      {
                        countries.length > 0 ? (
                          countries.map(country => (
                            <div className="option-country" key={country.id_place} onClick={() => handleClickOption(country)}>
                              {country.name_place}
                            </div>
                          ))
                        ) : (
                          <div>espera un momento</div>
                        )
                      }
                    </div>
                  )
                }
            </div>
        </div>
    </div>
  )
}

export default Form