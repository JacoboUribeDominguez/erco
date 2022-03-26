import React, { useContext, useState } from "react";
import { CITY, COUNTRY, STATE } from "../constants/constants";
import { Context } from "../context/contex";
import useFetch from "../hooks/useFetch";

const Select = (props) => {

  const {
    type,
    list,
    message
  } = props;

  const [placeSelect, setCountry] = useState(null);

  const context = useContext(Context);
  const {
    elementsActivated,
    ChangeAnElement,
    setStates,
    setCities,
    setPoblation
  } = context;

  const {
    handleFetch
  } = useFetch();

  const handleClickOption = async (place) => {
    let data = [];

    switch(type){
      case COUNTRY:
        data = await handleFetch(`http://localhost:3005/states/${place.id_country}`)
        setStates(data);
        break;
      case STATE:
        data = await handleFetch(`http://localhost:3005/cities/${place.id_state}`)
        setCities(data);
        break;
      case CITY:
        data = await handleFetch(`http://localhost:3005/cities/poblation/${place.id_city}`)
        console.log(data)
        setPoblation(data[0].poblation);
        break;
      default:
        break;
    }
    setCountry(place.name_place)
    ChangeAnElement(type)
  }

  return (
    <div className="select-container">
      <div
        className="select-default"
        onClick={() => ChangeAnElement(type)}
      >
        {placeSelect ? placeSelect : message}
      </div>
      {elementsActivated[type.toLowerCase()] && (
        <div className="options-select">
          {list.length > 0 ? (
            list.map((place) => (
              <div
                className="option-country"
                key={place.id_place}
                onClick={() => handleClickOption(place)}
              >
                {place.name_place}
              </div>
            ))
          ) : (
            <div>espera un momento</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Select;
