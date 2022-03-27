import React, { useContext } from "react";
import { 
  CITY, 
  COUNTRY, 
  STATE, 
  SELECTCOUNTRY,
  SELECTSTATE,
  SELECTCITY 
} from "../constants/constants";
import { Context } from "../context/contex";
import useFetch from "../hooks/useFetch";
import "../styles/select.css"

const Select = (props) => {

  const {
    type,
    list,
  } = props;

  const context = useContext(Context);
  const {
    elementsActivated,
    ChangeAnElement,
    setStates,
    setCities,
    setPoblation,
    elementsSelected,
    SelectAnElement
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
        setCities([]);
        setPoblation(null);
        SelectAnElement(COUNTRY, place.name_place);
        break;
      case STATE:
        data = await handleFetch(`http://localhost:3005/cities/${place.id_state}`)
        setCities(data);
        setPoblation(null);
        SelectAnElement(STATE, place.name_place);
        break;
      case CITY:
        data = await handleFetch(`http://localhost:3005/cities/poblation/${place.id_city}`)
        setPoblation(data[0].poblation);
        SelectAnElement(CITY, place.name_place);
        break;
      default:
        break;
    }
    ChangeAnElement(type)
  }

  return (
    <div className="select-container">
      <div
        className="select-default"
        onClick={() => ChangeAnElement(type)}
      >
        { 
          (type===COUNTRY) && (
            elementsSelected.country ? (
              elementsSelected.country
            ) : (
              SELECTCOUNTRY
            )
          )
        }
        { 
          (type===STATE) && (
            elementsSelected.state ? (
              elementsSelected.state
            ) : (
              SELECTSTATE
            )
          )
        }
        { 
          (type===CITY) && (
            elementsSelected.city ? (
              elementsSelected.city
            ) : (
              SELECTCITY
            )
          )
        }
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
