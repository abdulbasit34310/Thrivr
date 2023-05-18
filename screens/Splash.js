
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StatusBar, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     navigation.navigate('Login');
    //   }, 2000);
    //   return () => clearTimeout(timer);
    // }, []);

    return (
        <View style={styles.container}>
            <Text> sds </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        marginTop: '40%',
    },
    text: {
        marginTop: 25,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1D1D1D',
        fontFamily: 'Inter',
        letterSpacing: 3
    }
});

export default Splash;

