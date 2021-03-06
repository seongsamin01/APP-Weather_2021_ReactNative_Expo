 import React from "react";
 import { View, Text, StyleSheet, StatusBar } from "react-native";
 import PropTypes from "prop-types";
 import { LinearGradient } from 'expo-linear-gradient';
 import { Ionicons } from '@expo/vector-icons';

 const weatherOptions = {
     Haze : {
        iconName: "filter",
        gradient: ["#e65c00", "#F9D423"],
        title: "μκ°μμ±",
        subtitle: "πμ΄μ μ‘°μ¬νμΈμ©π"
     },
     Thunderstorm : {
         iconName: "ios-thunderstorm",
         gradient: ["#000000","#434343"],
         title: "ννμ‘°μ¬",
         subtitle: "β‘οΈκ°νλ λΌκ°λ€β‘οΈ"
     },
     Drizzle : {
         iconName: "rainy-sharp",
         gradient: ["#636fa4","#e8cbc0"],
         title: "μ¬λΉμ¬λΉ",
         subtitle: "π§μ΄μ¬λΉμμ΄μπ§"
     },
     Rain : {
         iconName: "ios-umbrella",
         gradient: ["#021B79","#0575E6"],
         title: "μ£Όλ₯΅μ£Όλ₯΅",
         subtitle: "π§λΉμ²λΌ λμ΄μ£Όλ₯΅μ£Όλ₯΅π§"
     },
     Snow : {
         iconName: "ios-snow-sharp",
         gradient: ["#CFDEF3","#E0EAFC"],
         title: "λμ΄νν",
         subtitle: "βοΈλμ¬λλ§λ€μβοΈ"
     },
     Atmosphere : {
         iconName: "partly-sunny-sharp",
         gradient: ["#be93c5","#7bc6cc"],
         title: "μ΄μκ΅¬λ¦",
         subtitle: "πλ±μ’μλ μ¨π"
     },
     Clear : {
         iconName: "sunny",
         gradient: ["#1c92d2","#f2fcfe"],
         title:"λ§κ³ μ²­λͺ",
         subtitle:"πνΌν¬λκ°μπ"
     },
     Clouds : {
         iconName: "ios-cloudy",
         gradient: ["#00416a","#e4e5e6"],
         title: "κ΅¬λ¦μλ©",
         subtitle: "πκΈ°λΆλ³λ£¨μΌπ"
     },
     Mist : {
         iconName: "ios-water",
         gradient: ["#2980b9", "#6dd5fa", "#ffffff"],
         title: "λΉμ€νΈμ΄",
         subtitle: "π€μ΄μ° μ§μ¦λπ€"
     },
     Dust : {
         iconName: "alert-circle",
         gradient: ["#1d4350","#a43931"],
         title: "λ¨Όμ§κ΅¬λμ΄",
         subtitle: "π·λ§μ€ν¬νμ°Έ!!π·"
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
              <Text style={styles.temp}>{temp}Β°C</Text>
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