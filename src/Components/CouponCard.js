import React from 'react';
import { Text, View, Alert, Linking, Image } from 'react-native';

import styles from '../styles'

export default function CouponCard({ imagePath, description }) {
    return (
        <View style={styles.couponCard}>
            <Image source={imagePath} style={{ width: 200, height: 200, borderRadius: 15, marginBottom: 10}} />
            <Text style={{fontWeight: 'bold', fontSize: 14}}>
                {description}
            </Text>

        </View>
    )
}