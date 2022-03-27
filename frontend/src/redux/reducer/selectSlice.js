import { createSlice } from "@reduxjs/toolkit";
import { CITY, COUNTRY, STATE } from '../../constants/constants';

export const selectSlice = createSlice({
    name: 'select',
    initialState: {
        elementsActivated : {
            country: false,
            state: false,
            city: false,
        },
        elementsSelected : {
            country: null,
            state: null,
            city: null,
        }
    },
    reducers: {
        SelectAnElement: (state, { payload }) => {
            const { element, place } = payload;
            switch(element){
                case COUNTRY:
                    state.elementsSelected = {
                        country : place,
                        state : null,
                        city : null
                    }
                    break;
                case STATE:
                    state.elementsSelected = {
                        ...state.elementsSelected,
                        state : place,
                        city : null
                    }
                    break;
                case CITY:
                    state.elementsSelected = {
                        ...state.elementsSelected,
                        city : place
                    }
                    break;
                default:
                    break;
            }
        },
        ChangeAnElement: (state, { payload }) => {
            switch(payload){
                case COUNTRY:
                    state.elementsActivated = {
                        ...state.elementsActivated,
                        country: !state.elementsActivated.country
                    }
                    break;
                case STATE:
                    state.elementsActivated = {
                        ...state.elementsActivated,
                        state: !state.elementsActivated.state
                    }
                    break;
                case CITY:
                    state.elementsActivated = {
                        ...state.elementsActivated,
                        city: !state.elementsActivated.city
                    }
                    break;
                default:
                    break;
            }
        }
    }
})

export const { 
    SelectAnElement,
    ChangeAnElement 
} = selectSlice.actions;

export default selectSlice.reducer;