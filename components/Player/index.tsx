import { Platform } from "react-native";

export default Platform.select({
  native: () => require('./native').default,
  default: () => require('./web').default,
})()
