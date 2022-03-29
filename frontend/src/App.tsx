import { Box, useColorMode } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chatpage from "./pages/Chatpage";
const Loadingpage = lazy(() => import("./pages/Loadingpage"));
const NotFound = lazy(() => import("./pages/404"));
const Homepage = lazy(() => import("./pages/Homepage"));

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
    <Box
      bgColor={colorMode === "dark" ? "#2d3748" : "#fff"}
      className="transition-all App"
      transition="1s"
    >
      {!loading ? (
        <Router>
          <Suspense fallback={<></>}>
            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/@" component={Chatpage} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      ) : (
        <Suspense fallback={<></>}>
          <Loadingpage colorMode={colorMode} progress={progress} />
        </Suspense>
      )}
    </Box>
  );
};

export default App;
