import React from "react";
import "./App.css";
import { Player_home } from "./components/Player_home";
import useDarkMode from "use-dark-mode";
import {
  Container,
  createTheme,
  NextUIProvider,
  Text
} from "@nextui-org/react";
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#7928CA",
      primaryLight: "#d9c2f0",
      success: "#FF1CF7"
    }
  }
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#7928CA",
      primaryLight: "#582A87",
      success: "#FF1CF7"
    }
  }
});

function App() {
  const darkMode = useDarkMode(false);
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <div>
        <Player_home />
      </div>

   
    </NextUIProvider>
  );
}

export default App;
