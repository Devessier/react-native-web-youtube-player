import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Player from "./components/Player";
import { PlayerRef } from "./components/Player/contract";

export default function App() {
  const playerRef = useRef<PlayerRef>(null)
  const [playerPlaying, setPlayerPlaying] = useState(false)
  const [duration, setDuration] = useState(0)

  async function handleComputeDuration() {
    const player = playerRef.current
    if (player === null) {
      return
    }
    const duration = await player.getDuration()

    setDuration(duration)
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Player ref={playerRef} width={300} height={200} videoId="eSzNNYk7nVU" playing={playerPlaying} />

      <Button title="Press me to play" onPress={() => {
        setPlayerPlaying(!playerPlaying)
      }} />

      <Text>
        Duration of the current track: {duration} seconds
      </Text>

      <Button title="Compute duration of the current track" onPress={handleComputeDuration} />

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
