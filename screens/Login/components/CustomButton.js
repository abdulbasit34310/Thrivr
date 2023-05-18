import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from 'react';
import CustomAlert from './CustomAlert';

export default function CustomButton({ label, width, color, btnTextColor, borderWidth, borderColor, data, setShowError }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleButtonPress = () => {
        setErrorMessage('An error occurred.');
        setShowError(true);

        setTimeout(() => {
            setShowError(false);
            setErrorMessage('');
        }, 3000); // Display error for 3 seconds
    };

    return (
        <TouchableOpacity onPress={handleButtonPress}
            style={[styles.btn, { width, backgroundColor: color, borderWidth: borderWidth || 0, borderColor: borderColor }]}>
            <Text style={[styles.btnText, { color: btnTextColor }]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 13,
        borderRadius: 25,
        
    },
    btnText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: '400',
        fontFamily: "Maitree_500Medium",
    },
});