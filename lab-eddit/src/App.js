import { ThemeProvider } from "@material-ui/core";
import Theme from "./constants/theme/Theme";
import Routes from "./rotes/Routes"

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes/>  
    </ThemeProvider>
  );
}

export default App;
