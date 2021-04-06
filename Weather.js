 import React from "react";
 import { View, Text, StyleSheet } from "react-native";
 import PropTypes from "prop-types";
 import { LinearGradient } from 'expo-linear-gradient';
 import { Ionicons } from '@expo/vector-icons';

 export default function Weather({ temp }) {
    return (
        <View style={styles.container}>
          <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.background}>
            <View style={styles.halfContainer}>
                <Ionicons name="ios-rainy-outline" size={150} color="blue" />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>
            <View style={styles.halfContainer} />
          </LinearGradient>
        </View> 
          
    );      
 }

 Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Fog"
    ]).isRequired
 };

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center"
     },
     temp: {
         fontSize:28,
         textAlign: "center"
     },
     halfContainer: {
         flex: 1,
         justifyContent: "center",
         ailgnItems: "center"
     }
 });