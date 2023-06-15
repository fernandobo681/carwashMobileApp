import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

interface Button {
    isLoading: boolean,
    text: string,
    onPress: any,
    disabled: boolean
}

export default function ButtonWithLoader({
    isLoading,
    text,
    onPress,
    disabled
}: Button) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle} disabled={disabled}>

            {!!isLoading ? <ActivityIndicator size="large" color="white" />
                : <Text style={styles.textStyle}>{text}</Text>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        height: 48,
        backgroundColor: '#30A2FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 16
    },
    textStyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    }
});