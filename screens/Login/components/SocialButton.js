import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function SocialButton({ source }) {
    return (
        <TouchableOpacity style={[styles.socialButton]}>
            <Text style={[styles.buttonText]}>
                Login with
            </Text>
            <Image source={source} style={{ height: 18, width: 18 }} />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 14,
        fontWeight: "400",
        marginHorizontal: 5,
        color: '#5E5E5E',
        fontFamily: "Maitree_500Medium",
    },
    socialButton: {
        width: 162,
        height: 47,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: '#282828',
        flexDirection: "row",
    },
});