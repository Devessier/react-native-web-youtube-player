import React from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import YouTube, { Options } from "react-youtube";
import { PlayerComponent, PlayerProps, PlayerRef } from "./contract";
import { YoutubeIframePlayer } from "./youtube-iframe";

const WebPlayer: PlayerComponent = forwardRef<PlayerRef, PlayerProps>(
  ({ width, height, videoId }, ref) => {
    const playerRef = useRef<YoutubeIframePlayer>()

    useImperativeHandle(ref, () => ({
      pause() {
        playerRef.current?.pauseVideo()
      },

      play() {
        playerRef.current?.playVideo()
      }
    }))

    const playerOptions: Options = {
      height: String(height),
      width: String(width),
    }

    function setPlayerRef(ref: YouTube) {
      playerRef.current = ref.getInternalPlayer() as YoutubeIframePlayer
    }

    return (
      <YouTube ref={setPlayerRef} videoId={videoId} opts={playerOptions} />
    )
  }
);

export default WebPlayer;
