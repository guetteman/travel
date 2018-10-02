import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(), 
                    name: action.placeName,
                    image: {
                        uri: "https://cloud.lovin.ie/images/uploads/2017/07/_relatedEntryImage2x/shutterstock_431693263.jpg?mtime=20170717124617"
                    }
                })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey;
                }),
            };

        default:
            return state;
    }
}

export default reducer;