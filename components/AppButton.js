//import liraries
import React, { Component } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

// create a component
const AppButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} activeOpacity={0.7}
        onPress={onPress}
        style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    appButtonContainer: {
        marginTop:5,
        elevation: 8,
        width: 200,
        backgroundColor: "#a27ce6",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "400",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});

//make this component available to the app
export default AppButton;
