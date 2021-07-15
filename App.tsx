import { StatusBar } from "expo-status-bar";
import React from "react";
import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Player from "./components/Player";
import { PlayerRef } from "./components/Player/contract";

export default function App() {
  const playerRef = useRef<PlayerRef>(null)
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Player ref={playerRef} width={300} height={200} videoId="eSzNNYk7nVU" />

      <Button title="Press me to play" onPress={() => {
        playerRef.current?.play()
      }} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
