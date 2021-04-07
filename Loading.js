import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>오늘의 날씨는, 과연? 😉 </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 130,
    backgroundColor: "black",
    justifyContent: "center",
    ailgnItems: "center"
  },
  text: {
    color: "white",
    fontSize: 24,
    textAlign: "center"
  }
});