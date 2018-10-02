import React from 'react';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = props => {

    return (
        <DefaultInput  
            value={props.placeName} 
            onChangeText={props.onChangeText}
            placeholder="An Awesome Place"
        /> 
    );

}

export default placeInput;