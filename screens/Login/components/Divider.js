import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function Divider() {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 37 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#515151' }} />
                <View>
                    <Text style={{ width: 100, textAlign: 'center', color: '#515151', fontSize: 15 }}> Or </Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#515151' }} />
            </View>
        </View>
    );
}
