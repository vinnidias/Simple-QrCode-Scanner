import React, { useState, useEffect } from 'react';
import { Text, View, Linking, Button, Image, TouchableOpacity } from 'react-native';
import styles from '../styles'

export default function DefaultButton({ onPress, title }) {
    return (
        <TouchableOpacity
            style={styles.qrButton}
            onPress={onPress}
        >
            <Text style={styles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}