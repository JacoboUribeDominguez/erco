import React, { createContext, useState } from 'react'

export const Context = createContext();

export const ContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [satates, setStates] = useState([]);
    const [elementsActivated, ActivateElement] = useState({
        country: false,
        state: false,
        city: false,
    })

    const ChangeAnElement = (element) => {
        switch(element){
            case 'COUNTRY':
                ActivateElement({
                    ...elementsActivated,
                    country: !elementsActivated.country
                })
                break;
            case 'STATE':
                ActivateElement({
                    ...elementsActivated,
                    state: !elementsActivated.state
                })
                break;
            case 'CITY':
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
            countries,
            satates,
            elementsActivated, 
            setCountries,
            ChangeAnElement,
            setStates,
        }}>
            {children}
        </Context.Provider>
    )
}