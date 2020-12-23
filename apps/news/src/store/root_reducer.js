import { combineReducers } from '@reduxjs/toolkit';

import { newsSlice } from './news';

export const reducers = {
    news: newsSlice.reducer,
};

export const rootReducer = combineReducers(reducers);
