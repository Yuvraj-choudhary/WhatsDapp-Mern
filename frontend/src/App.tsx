import { Box, useColorMode } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
const Loadingpage = lazy(() => import("./pages/Loadingpage"));
const NotFound = lazy(() => import("./pages/404"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Chatpage = lazy(() => import("./pages/Chatpage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { colorMode } = useColorMode();

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
        <Box d={{ base: "none", xl: "flex" }} w="100%">
          <Suspense fallback={<></>}>
            <Loadingpage
              colorMode={colorMode}
              progress={progress}
              setLoading={setLoading}
              setProgress={setProgress}
            />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};

export default App;
