import React, { createContext, useState } from 'react'
import { CITY, COUNTRY, STATE } from '../constants/constants';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [elementsActivated, ActivateElement] = useState({
        country: false,
        state: false,
        city: false,
    })
    const [elementsSelected, SelectElement] = useState({
        country: null,
        state: null,
        city: null,
    })

    React.useEffect(() => {
        console.log(elementsSelected)
    }, [elementsSelected])

    const SelectAnElement = (element, place) => {
        switch(element){
            case COUNTRY:
                SelectElement({
                    country: place,
                    state: null,
                    city: null
                })
                break;
            case STATE:
                SelectElement({
                    ...elementsSelected,
                    state: place,
                    city: null,
                })
                break;
            case CITY:
                SelectElement({
                    ...elementsSelected,
                    city: place
                })
                break;
            default:
                break;
        }
    }

    const ChangeAnElement = (element) => {
        switch(element){
            case COUNTRY:
                ActivateElement({
                    ...elementsActivated,
                    country: !elementsActivated.country
                })
                break;
            case STATE:
                ActivateElement({
                    ...elementsActivated,
                    state: !elementsActivated.state
                })
                break;
            case CITY:
                ActivateElement({
                    ...elementsActivated,
                    city: !elementsActivated.city
                })
                break;
            default:
                break;
        }
    }

    return (
        <Context.Provider value={{ 
            elementsActivated, 
            elementsSelected,
            SelectAnElement,
            ChangeAnElement,
        }}>
            {children}
        </Context.Provider>
    )
}