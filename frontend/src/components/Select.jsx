import React from "react";

//constantes
import { 
  CITY, 
  COUNTRY, 
  STATE, 
  SELECTCOUNTRY,
  SELECTSTATE,
  SELECTCITY 
} from "../constants/constants";

//hooks
import useFetch from "../hooks/useFetch";

//css
import "../styles/select.css"

//redux
import {
  setStates,
  setCities,
  setPoblation
} from '../redux/reducer/placesSlice';

import {
  SelectAnElement,
  ChangeAnElement,
} from '../redux/reducer/selectSlice';
import { useDispatch, useSelector } from "react-redux";

const Select = (props) => {

  //props
  const {
    type,
    list,
  } = props;

  //hooks
  const {
    handleFetch
  } = useFetch();

  //redux
  const dispatch = useDispatch();
  const elementsSelected = useSelector(state => state.select.elementsSelected);
  const elementsActivated = useSelector(state => state.select.elementsActivated);

  //functions
  const handleClickOption = async (place) => {
    let data = [];

    switch(type){
      case COUNTRY:
        data = await handleFetch(`http://localhost:3005/states/${place.id_country}`)
        dispatch(setStates(data));
        dispatch(setCities([]));
        dispatch(setPoblation(null));
        dispatch(SelectAnElement({
          element: COUNTRY, 
          place: place.name_place
        }));
        break;
      case STATE:
        data = await handleFetch(`http://localhost:3005/cities/${place.id_state}`);
        dispatch(setCities(data));
        dispatch(setPoblation(null));
        dispatch(SelectAnElement({
          element: STATE, 
          place: place.name_place
        }));
        break;
      case CITY:
        data = await handleFetch(`http://localhost:3005/cities/poblation/${place.id_city}`)
        dispatch(setPoblation(data[0].poblation));
        dispatch(SelectAnElement({
          element: CITY, 
          place: place.name_place
        }));
        break;
      default:
        break;
    }
    dispatch(ChangeAnElement(type));
  }

  return (
    <div className="select-container">
      <div
        className="select-default"
        onClick={() => dispatch(ChangeAnElement(type))}
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
