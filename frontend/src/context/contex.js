import React, { createContext, useState } from 'react'
import { CITY, COUNTRY, STATE } from '../constants/constants';

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [elementsActivated, ActivateElement] = useState({
        country: false,
        state: false,
        city: false,
    })

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
            ChangeAnElement,
        }}>
            {children}
        </Context.Provider>
    )
}