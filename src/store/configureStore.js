import { createStore, combineReducers, compose } from 'redux';

import placesReducers from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducers
});

let composerEnhancers = compose;

if (__DEV__) {
    composerEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composerEnhancers());
};

export default configureStore;