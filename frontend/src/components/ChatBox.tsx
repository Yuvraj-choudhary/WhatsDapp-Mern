import { Box, useColorMode } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain, isHidden, setIsHidden }) => {
  const { selectedChat }: any = ChatState();
  const { colorMode } = useColorMode();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", xl: "flex" }}
      alignItems="center"
      flexDir="column"
      overflow="hidden"
      p={3}
      bg={colorMode === "dark" ? "#2d3748" : "white"}
      w={{ base: "100%", xl: "70%" }}
      h={{
        base: selectedChat && "100vh",
        xl: isHidden ? "calc(100vh - 24px)" : "100%",
      }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
