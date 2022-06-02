import { Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/404";
import Chatpage from "./pages/Chatpage";
import Homepage from "./pages/Homepage";
import Loadingpage from "./pages/Loadingpage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { colorMode } = useColorMode();

  useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 150;
        return Math.min(oldProgress + diff, 100);
      });
    }, 700);

    setTimeout(() => {
      setLoading(false);
    }, 1222);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box className="App">
      {!loading ? (
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/@" component={Chatpage} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Loadingpage colorMode={colorMode} progress={progress} />
      )}
    </Box>
  );
};

export default App;
