import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./source/components/Game";
import "react-native-gesture-handler";

const App = () =>
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Game />;
  </GestureHandlerRootView>

export default App;