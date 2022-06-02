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
import {useEffect} from "react";
import {useHistory} from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import "./styles.css";

const Homepage = () => {
    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo")!);

        if (user) history.push("/@");
    }, [history]);

    return (
        <div className="home">
            <Container maxW="xl" centerContent>
                <Box
                    display="flex"
                    justifyContent="center"
                    p={3}
                    bg="white"
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="3xl"
                    borderWidth="1px"
                >
                    <Text fontSize="4xl" fontFamily="nunito" color="black">
                        Chat Dapp
                    </Text>
                </Box>
                <Box
                    bg="white"
                    color="black"
                    w="100%"
                    p={5}
                    borderRadius="3xl"
                    borderWidth="1px"
                    shadow="xl"
                >
                    <Tabs isFitted variant="soft-rounded">
                        <TabList mb="1em">
                            <Tab>Login</Tab>
                            <Tab>Sign Up</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Login/>
                            </TabPanel>
                            <TabPanel>
                                <Signup/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Container>
        </div>
    );
}

export default Homepage;
