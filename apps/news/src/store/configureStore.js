import { configureStore as createStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootReducer } from './root_reducer';

const defaultMiddlewareOptions = {
    serializableCheck: {
        ignoredActionPaths: ['meta.onSuccess', 'meta.onFailure'],
    },
};

const middleware = [...getDefaultMiddleware(defaultMiddlewareOptions)];

export const store = createStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
});


