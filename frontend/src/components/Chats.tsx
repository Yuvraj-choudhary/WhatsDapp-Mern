import {Box, Input, useColorMode, useToast} from "@chakra-ui/react";
import {IconButton} from "@material-ui/core";
import axios from "axios";
import {useEffect, useState} from "react";
import {getSender, getSenderPic} from "../config/ChatLogics";
import {ChatState} from "../context/ChatProvider";
import ChatList from "./ChatList";
import ChatLoading from "./ChatLoading";
import GroupAdd from "./icons/GroupAdd";
import GroupChatModel from "./miscellaneous/GroupChatModel";
import "./styles.css";

const Chats = ({fetchAgain, isHidden, setIsHidden}: any) => {
    const [loggedUser, setLoggedUser]: any = useState();
    const {selectedChat, setSelectedChat, user, chats, setChats}: any =
        ChatState();
    const {colorMode} = useColorMode();
    const [searchChat, setSearchChat]: any = useState("");

    const toast = useToast();

    const fetchChats = async () => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
            };

            const {data} = await axios.get("/api/chat", config);

            setChats(data);
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the chats",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
    };

    useEffect(() => {
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")!));
        fetchChats();
        // eslint-disable-next-line
    }, [fetchAgain]);

    return (
        <Box
            display={{base: selectedChat ? "none" : "flex", xl: "flex"}}
            flexDir="column"
            alignItems="center"
            bg="white"
            h={{base: isHidden ? "calc(100vh - 24px)" : "100%"}}
            w={{base: "100%", xl: "22%"}}
            backgroundColor={colorMode === "dark" ? "#2d3748" : "#fff"}
            pb={5}
        >
            <Box
                pb={2}
                pt={3}
                px="15px"
                fontSize={{base: "28px", xl: "30px"}}
                fontFamily="Nunito"
                display="flex"
                w="100%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Input
                    placeholder="Search Chats"
                    value={searchChat}
                    onChange={(e) => setSearchChat(e.target.value)}
                    borderColor="rgb(255 255 255 / 0%)"
                    boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
                />
                <GroupChatModel>
                    <IconButton
                        style={{marginLeft: 7, color: "#898787"}}
                        className="button-inner-effect"
                    >
                        <GroupAdd/>
                    </IconButton>
                </GroupChatModel>
            </Box>
            <Box
                display="flex"
                flexDir="column"
                pt={3}
                w="100%"
                h="100vh"
                borderRadius="3xl"
                overflowY="hidden"
            >
                {chats ? (
                    <ChatList
                        searchChat={searchChat}
                        chats={chats}
                        getSender={getSender}
                        loggedUser={loggedUser}
                        setSelectedChat={setSelectedChat}
                        selectedChat={selectedChat}
                        colorMode={colorMode}
                        getSenderPic={getSenderPic}
                    />
                ) : (
                    <ChatLoading/>
                )}
            </Box>
        </Box>
    );
};

export default Chats;
