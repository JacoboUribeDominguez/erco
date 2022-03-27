import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducer/placesSlice';

export default configureStore({
    reducer: { 
        places: placesReducer
    }
})