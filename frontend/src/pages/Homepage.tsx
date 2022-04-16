import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "./styles.css";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo")!);

    if (user) history.push("/@");
  }, [history]);

  return (
    <div className="home">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="3xl"
          borderWidth="1px"
          shadow="2xl"
        >
          <Text fontSize="4xl" fontFamily="nunito">
            Chat Dapp
          </Text>
        </Box>
        <Box w="100%" p={5} borderRadius="3xl" borderWidth="1px" shadow="2xl">
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab className="button-inner-effect" mr={2}>
                Login
              </Tab>
              <Tab className="button-inner-effect" ml={2}>
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default Homepage;
