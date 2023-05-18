import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ title, text, onPress }) => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    backgroundColor: '#0E0E0E',
    padding: 21,
    position: 'absolute',
    left: 42,
    top: 615,
    borderRadius: 30,
    width: 324,
    height: 105,
    borderColor: '#8D2D2D',
    borderWidth: 1,
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: "Maitree_500Medium",
  },
  message: {
    fontSize: 12,
    marginBottom: 20,
    color: '#FFFFFF',
    fontFamily: "Maitree_500Medium",

  },
});

export default CustomAlert;
