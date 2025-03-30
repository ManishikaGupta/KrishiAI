import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Krishi AI Community</Text>

      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHnl9T6jHnePYIE97AI8cFCwjHUF7b5-0mg&s",
        }}
      />

      <Text style={styles.subtitle}>
        Empowering farmers with technology and collaboration.
      </Text>

      <Button
        title="LET'S GO"
        onPress={() => alert("Navigating to next page")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4E1C4", // Warm beige
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#6D4C41", // Earthy brown
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#A1887F", // Soft brown
  },
  subtitle: {
    fontSize: 16,
    color: "#4E342E", // Darker brown
    textAlign: "center",
    marginTop: 20,
  },
});
