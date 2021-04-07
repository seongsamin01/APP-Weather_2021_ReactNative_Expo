 import React from "react";
 import { View, Text, StyleSheet, StatusBar } from "react-native";
 import PropTypes from "prop-types";
 import { LinearGradient } from 'expo-linear-gradient';
 import { Ionicons } from '@expo/vector-icons';

 const weatherOptions = {
     Haze : {
        iconName: "filter",
        gradient: ["#e65c00", "#F9D423"]
     },
     Thunderstorm : {
         iconName: "ios-thunderstorm",
         gradient: ["#000000","#434343"]
     },
     Drizzle : {
         iconName: "rainy-sharp",
         gradient: ["#636fa4","#e8cbc0"]
     },
     Rain : {
         iconName: "ios-umbrella",
         gradient: ["#021B79","#0575E6"]
     },
     Snow : {
         iconName: "ios-snow-sharp",
         gradient: ["#CFDEF3","#E0EAFC"]
     },
     Atmosphere : {
         iconName: "partly-sunny-sharp",
         gradient: ["#be93c5","#7bc6cc"]
     },
     Clear : {
         iconName: "sunny",
         gradient: ["#1c92d2","#f2fcfe"]
     },
     Clouds : {
         iconName: "ios-cloudy",
         gradient: ["#00416a","#e4e5e6"]
     },
     Mist : {
         iconName: "ios-water",
         gradient: ["#2980b9", "#6dd5fa", "#ffffff"]
     },
     Dust : {
         iconName: "alert-circle",
         gradient: ["#1d4350","#a43931"]
     }
 };

 export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={weatherOptions["Mist"].gradient}
            style={styles.container}
        >
           <StatusBar barStyle="light-content" />
           <View style={styles.halfContainer}>
              <Ionicons 
                size={150}
                name={weatherOptions[condition].iconName}
                color="white"
            />
              <Text style={styles.temp}>{temp}°C</Text>
           </View>
           <View style={styles.halfContainer} />
        </LinearGradient>
          
    );      
 }

 Weather.propTypes = {
    temp: PropTypes.number.isRequired,
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
        "Dust"
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
         textAlign: "center",
         color: "white"
     },
     halfContainer: {
         flex: 1,
         justifyContent: "center",
         ailgnItems: "center"
     }
 });