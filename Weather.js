 import React from "react";
 import { View, Text, StyleSheet, StatusBar } from "react-native";
 import PropTypes from "prop-types";
 import { LinearGradient } from 'expo-linear-gradient';
 import { Ionicons } from '@expo/vector-icons';

 const weatherOptions = {
     Haze : {
        iconName: "filter",
        gradient: ["#e65c00", "#F9D423"],
        title: "안개자욱",
        subtitle: "🚗운전조심하세용🚗"
     },
     Thunderstorm : {
         iconName: "ios-thunderstorm",
         gradient: ["#000000","#434343"],
         title: "태풍조심",
         subtitle: "⚡️간판날라간다⚡️"
     },
     Drizzle : {
         iconName: "rainy-sharp",
         gradient: ["#636fa4","#e8cbc0"],
         title: "슬비슬비",
         subtitle: "💧이슬비왔어요💧"
     },
     Rain : {
         iconName: "ios-umbrella",
         gradient: ["#021B79","#0575E6"],
         title: "주륵주륵",
         subtitle: "🌧비처럼 돈이주륵주륵🌧"
     },
     Snow : {
         iconName: "ios-snow-sharp",
         gradient: ["#CFDEF3","#E0EAFC"],
         title: "눈이펑펑",
         subtitle: "☃️눈사람만들자☃️"
     },
     Atmosphere : {
         iconName: "partly-sunny-sharp",
         gradient: ["#be93c5","#7bc6cc"],
         title: "이쁜구름",
         subtitle: "🍀딱좋은날씨🍀"
     },
     Clear : {
         iconName: "sunny",
         gradient: ["#1c92d2","#f2fcfe"],
         title:"맑고청명",
         subtitle:"😎피크닉가자😎"
     },
     Clouds : {
         iconName: "ios-cloudy",
         gradient: ["#00416a","#e4e5e6"],
         title: "구름잔뜩",
         subtitle: "😖기분별루야😖"
     },
     Mist : {
         iconName: "ios-water",
         gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
         title: "비스트옴",
         subtitle: "😤어우 짜증나😤"
     },
     Dust : {
         iconName: "alert-circle",
         gradient: ["#1d4350","#a43931"],
         title: "먼지구댕이",
         subtitle: "😷마스크필참!!😷"
     }
 };

 export default function Weather({ temp, condition }) {
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
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
           <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
           </View>
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
     },
     title: {
         color: "white",
         fontWeight: "500",
         fontSize: 45,
         marginBottom: 20
     },
     subtitle: {
         color: "white",
         fontWeight: "400",
         fontSize: 30,
         marginBottom: 50
     },
     textContainer: {
         paddingHorizontal: 20,
         alignItems: "center"
     }
 });