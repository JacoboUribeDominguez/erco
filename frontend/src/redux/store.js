import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducer/placesSlice';
import selectReducer from './reducer/selectSlice';

export default configureStore({
    reducer: { 
        places: placesReducer,
        select: selectReducer,
    }
})