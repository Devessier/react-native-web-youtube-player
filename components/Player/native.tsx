import React, { useRef, useImperativeHandle, forwardRef } from "react";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { PlayerComponent, PlayerProps, PlayerRef } from "./contract";

const NativePlayer: PlayerComponent = forwardRef<PlayerRef, PlayerProps>(
  ({ width, height, videoId, playing }, ref) => {
    const playerRef = useRef<YoutubeIframeRef>(null);

    useImperativeHandle(ref, () => ({
      async getDuration() {
        const duration = await playerRef.current?.getDuration();
        if (duration === undefined) {
          throw new Error(
            "Could not get duration from react-native-youtube-iframe"
          );
        }

        return duration;
      },
    }));

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
