import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Box,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useToast
} from "@chakra-ui/react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import Linkify from "linkify-react";
import AudioPlayer from "react-h5-audio-player";
// @ts-ignore
import ModalImage from "react-image-modal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
    isLastMessage,
    isSameSender,
    isSameSenderMargin
} from "../config/ChatLogics";
import "./styles.css";

const MessageReceiver = ({
  m,
  i,
  message,
  deleteMessage,
  user,
  selectedChat,
  isTyping,
  star,
  setStar,
}:any) => {
  const formatDate = (date: any) => {
    return date < 10 ? "0" + date : date;
  };

  const options = {
    target: "_blank",
    className: "link--r",
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const toast = useToast();
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        style={{
          backgroundColor: "#2b6bed",
          boxShadow: "-1px 4px 20px -6px rgb(0 0 0 / 69%)",
          marginTop: 1.5,
          marginLeft: selectedChat.isGroupChat
            ? isSameSenderMargin(message, m, i, user._id)
            : 5,
          borderRadius:
            isSameSender(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? isTyping
                ? "20px"
                : "20px 20px 20px 9px"
              : "20px",
          marginBottom:
            isSameSender(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? 20
              : "0",

          padding: "10px 10px",
        }}
        maxWidth={{ base: "80%", xl: "63%" }}
      >
        {m.image !== "" && (
          <Zoom
            transitionDuration={600}
            zoomZindex={0}
            overlayBgColorEnd="RGBA(255,255,255,0.09)"
          >
            <Image src={m.image} alt="" className="image" />
          </Zoom>
        )}
        {m.audio !== "" && (
          <AudioPlayer
            src={m.audio || m.content}
            style={{
              marginTop: m.image ? "10px" : 0,
              marginBottom: m.gif ? "10px" : 0,
              backgroundColor: colorMode === "dark" ? "#232b38" : "#fff",
              color: colorMode === "dark" ? "#fff" : "#333",
            }}
          />
        )}
        {m.gif !== "" && (
          <ModalImage
            showRotation={true}
            showZoom={true}
            src={m.gif}
            alt=""
            className="rounded-2xl w-full max-h-full"
          />
        )}
        {m.video !== "" && (
          <video
            src={m.video}
            controls={true}
            className="rounded-2xl w-full max-h-full"
          ></video>
        )}
        {m.file !== "" && (
          <a href={m.file} target="_blank">
            <Box
              bg="#fff"
              borderRadius="17px"
              h="100px"
              w="100px"
              color="#000"
              cursor="pointer"
              display="flex"
              alignItems="center"
            >
              <ExternalLinkIcon mr={1} />
              <Text fontFamily="Nunito">Open file in New Tab</Text>
            </Box>
          </a>
        )}
        <LinkPreview
          width="auto"
          showLoader={false}
          borderRadius={17}
          url={m.content}
          textAlign="center"
        />
        <Linkify options={options}>
          <Text fontFamily="Nunito" color="white">
            {m.content}
          </Text>
        </Linkify>
        <Box display="flex" alignItems="center" justifyContent="center">
          <span
            style={{
              fontSize: "12px",
              marginRight: "auto",
              display: "flex",
              color: "white",
            }}
          >
            {formatDate(days[new Date(m.createdAt).getDay()])}{" "}
            {formatDate(new Date(m.createdAt).getDate())}{" "}
            {formatDate(months[new Date(m.createdAt).getMonth()])}{" "}
            {formatDate(
              new Date(m.createdAt).toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
                minute: "numeric",
              })
            )}
          </span>
          <Menu>
            <MenuButton>
              <ChevronDownIcon fontSize="2xl" color="white" />
            </MenuButton>
            <MenuList borderRadius="2xl" boxShadow="2xl">
              <MenuItem onClick={() => deleteMessage(m)}>Delete</MenuItem>
              {m.content !== "" && (
                <MenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(m.content);
                    toast({
                      title: "Successfully copied the text to clipboard.",
                      status: "success",
                      position: "top",
                      duration: 2000,
                      isClosable: true,
                    });
                  }}
                >
                  Copy Text
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default MessageReceiver;
