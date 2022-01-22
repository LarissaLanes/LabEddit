import { ThemeProvider } from "@material-ui/core";
import Theme from "./constants/theme/Theme";
import GlobalStateProvider from "./global/GlobalStateProvider";
import Routes from "./rotes/Routes"

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
