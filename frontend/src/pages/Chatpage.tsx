import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ChatBox from "../components/ChatBox";
import Chats from "../components/Chats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import "./styles.css";

const Chatpage = () => {
  const { user }: any = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isHidden, setIsHidden]: any = useState(false);

  return (
    <Box style={{ width: "100%" }} overflow="hidden" className="chat-anim">
      {user && <SideDrawer isHidden={isHidden} setIsHidden={setIsHidden} />}
      <Box display="flex" justifyContent="ntent="space-between" w="100%" className="chat-box">
        {user && (
          <Chats
            fetchAgain={fetchAgain}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        )}
        {user && (
          <ChatBox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            isHidden={isHidden}
            setIsHidden={setIsHidden}
          />
        )}
      </Box>
    </Box>
  );
};

export default Chatpage;
