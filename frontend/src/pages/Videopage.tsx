import CatalystChat from "catalyst-vc-react"
import "./styles.css"
import {Box} from "@chakra-ui/react";
import {ChatState} from "../context/ChatProvider";
import {useHistory} from "react-router-dom";

const Videopage = () => {
    const {
        user,
        selectedChat
    }: any = ChatState();

    const history = useHistory();


    return (
        <Box w="100%" h="100vh">
            <CatalystChat
                room={selectedChat._id}
                appId="Wq5fHCh2lHRYl0hz8ffbu2g8Ojp1"
                name={user.name}
                disableChat
                disableSetupView
                onLeaveCall={() => {history.push("/@"); window.location.reload();}}
            />
        </Box>
    )
}

export default Videopage;
