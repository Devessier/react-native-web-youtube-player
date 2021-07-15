import React from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { PlayerComponent, PlayerProps, PlayerRef } from "./contract";

const NativePlayer: PlayerComponent = forwardRef<PlayerRef, PlayerProps>(
  ({ width, height, videoId, playing }, ref) => {
    const playerRef = useRef<YoutubeIframeRef>(null);

    useImperativeHandle(ref, () => ({}));

    return (
      <YoutubePlayer
        ref={playerRef}
        videoId={videoId}
        height={height}
        width={width}
        play={playing}
      />
    );
  }
);

export default NativePlayer;
