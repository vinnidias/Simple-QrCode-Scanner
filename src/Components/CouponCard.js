import React from 'react';
import { Text, View, Alert, Linking, Image, TouchableOpacity } from 'react-native';

import styles from '../styles'

export default function CouponCard({ imagePath, description, onPress, codeText }) {
    return (
        <TouchableOpacity style={styles.couponCard} onPress={onPress}>
            <Image source={imagePath} style={{ width: 180, height: 180, borderRadius: 15, marginBottom: 10}} />
            <Text style={{fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginBottom: 20}}>
                {description}
            </Text>
            <Text style={{fontSize: 22, fontWeight: 'bold',  textAlign: 'center'}}>
                {codeText}
            </Text>

        </TouchableOpacity>
    )
}