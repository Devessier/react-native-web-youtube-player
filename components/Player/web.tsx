import React from "react";
import { Text, View } from "react-native";
import YouTube, { Options } from "react-youtube";

export default function WebPlayer() {
  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function onReady(event: { target: any }) {
    console.log("ready", event);
  }

  return (
    <View>
      <Text>Salut for Web</Text>

      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onReady} />
    </View>
  );
}
