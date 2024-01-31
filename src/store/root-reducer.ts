import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { catsSlice } from './slice/cats/cats';

export const rootReducer = combineReducers({
    [NameSpace.Cat]: catsSlice.reducer,
});