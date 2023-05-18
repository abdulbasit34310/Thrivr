import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import thrivrLogo from "../assets/thrivrLogo.png";

export default function SplashScreen({ navigation }) {
    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigation.navigate("Login"); // Call the onFinish function after 2 seconds
    //     }, 4000);

    //     return () => clearTimeout(timer);
    // }, []);

    return (

        <View style={styles.container}>
            <StatusBar style="hidden" />

            <LinearGradient
                colors={['#0D0D0D', '#0F0F0F', '#000000']}
                style={styles.background}
            />
            <Image
                source={thrivrLogo}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'relative',
    },
    image: {
        width: 103,
        height: 72,
        resizeMode: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 790,
    },
});