import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles'

function AdButton({onAdPress}) {
    return (
        <TouchableOpacity onPress={onAdPress} >
            <Image
                source={require('../Images/ad-icon2.png')}
                style={{ height: 40, width: 40, alignSelf: 'center' }}
            />
        </TouchableOpacity>
    )
}

export default AdButton