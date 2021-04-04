import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


function InstaButton({onInstaPress}) {
    return (
        <TouchableOpacity onPress={onInstaPress} >
            <Image
                source={require('../Images/instagram-icon.png')}
                style={{ height: 33, width: 33, alignSelf: 'center' }}
            />
        </TouchableOpacity>
    )
}

export default InstaButton

