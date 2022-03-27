import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
    name: 'places',
    initialState: {
        countries: [],
        states: [],
        cities: [],
        poblation: null
    },
    reducers: {
        setCountries: (state, { payload }) => {
            state.countries = payload;
        },
        setStates: (state, { payload }) => {
            state.states = payload;
        },
        setCities: (state, { payload }) => {
            state.cities = payload;
        },
        setPoblation: (state, { payload }) => {
            state.poblation = payload;
        }
    }
})

export const { 
    setCountries,
    setStates,
    setCities,
    setPoblation
} = placesSlice.actions

export default placesSlice.reducer;