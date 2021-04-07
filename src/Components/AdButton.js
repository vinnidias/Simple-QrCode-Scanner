import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../styles'

function AdButton({onAdPress}) {
    return (
        <TouchableOpacity onPress={onAdPress} >
            <Image
                source={require('../Images/dollar-icon.png.png')}
                style={{ height: 35, width: 35, alignSelf: 'center' }}
            />
        </TouchableOpacity>
    )
}

export default AdButton