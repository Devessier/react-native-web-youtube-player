import React from "react";

export interface PlayerProps {
  height: number;
  width: number;
  videoId: string;
};

export type PlayerComponent = React.ForwardRefExoticComponent<
  PlayerProps & React.RefAttributes<PlayerRef>
>;

export interface PlayerRef {
  play(): void;
  pause(): void;
}
