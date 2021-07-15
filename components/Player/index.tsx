import { Platform } from "react-native";
import { PlayerComponent } from "./contract";

const PlayerWrapper: PlayerComponent = Platform.select({
  native: () => require('./native').default,
  default: () => require('./web').default,
})()

export default PlayerWrapper
