import React from "react";

export interface PlayerProps {
  height: number;
  width: number;
  videoId: string;
  playing: boolean;
}

export type PlayerComponent = React.ForwardRefExoticComponent<
  PlayerProps & React.RefAttributes<PlayerRef>
>;

export interface PlayerRef {
  getDuration(): Promise<number>
}
