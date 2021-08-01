/**
 * Copy pasted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/youtube/index.d.ts
 */
export interface YoutubeIframePlayer {
  /**
   * Plays the currently cued/loaded video.
   */
  playVideo(): void;

  /**
   * Pauses the currently playing video.
   */
  pauseVideo(): void;

  /**
   * @returns Elapsed time in seconds since the video started playing.
   */
  getCurrentTime(): number;

  /**
   * @returns Duration in seconds of the currently playing video.
   */
  getDuration(): number;
}
