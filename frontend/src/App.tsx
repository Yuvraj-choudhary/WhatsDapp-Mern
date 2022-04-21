import { Box, useColorMode } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ChatState } from "./context/ChatProvider";
import Chatpage from "./pages/Chatpage";
import Text from "./pages/Text";
const Loadingpage = lazy(() => import("./pages/Loadingpage"));
const NotFound = lazy(() => import("./pages/404"));
const Homepage = lazy(() => import("./pages/Homepage"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isLoggedIn }: any = ChatState();

  const { colorMode } = useColorMode();

  return (
    <Box
      bgColor={colorMode === "dark" ? "#2d3748" : "#fff"}
      className="transition-all App"
      transition="1s"
    >
      <Suspense
        fallback={
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
        }
      >
        <Router>
          {!isLoggedIn ? (
            <Homepage />
          ) : (
            <Switch>
              <Route path="/" component={Chatpage} exact />
              <Route path="/$" component={Text} />
              <Route component={NotFound} />
            </Switch>
          )}
        </Router>
      </Suspense>
    </Box>
  );
};

export default App;
