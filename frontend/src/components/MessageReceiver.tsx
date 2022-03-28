import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import Linkify from "linkify-react";
import AudioPlayer from "react-h5-audio-player";
import ModalImage from "react-image-modal";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
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
}) => {
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
  return (
    <>
      <Box
        style={{
          backgroundColor: "#2b6bed",
          boxShadow: "-1px 4px 20px -6px rgb(0 0 0 / 60%)",
          marginTop: 1.5,
          marginLeft: selectedChat.isGroupChat
            ? isSameSenderMargin(message, m, i, user._id)
            : 0,
          borderRadius:
            isSameSender(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? isTyping
                ? "20px"
                : "20px 20px 20px 9px"
              : isTyping
              ? 0
              : "20px",
          marginBottom:
            isSameSender(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? "20px"
              : "0px",
          padding: "10px 10px",
        }}
        maxWidth={{ base: "80%", xl: "50%" }}
        minWidth={{ base: "10%", xl: "7%" }}
      >
        {m.image !== "" && (
          <ModalImage
            showRotation={true}
            showZoom={true}
            showDownload={true}
            src={m.image || m.content}
            alt=""
            className="image"
          />
        )}
        {m.audio !== "" && (
          <AudioPlayer
            src={m.audio || m.content}
            style={{
              marginTop: m.image ? "10px" : 0,
              marginBottom: m.gif ? "10px" : 0,
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
            className="rounded-2xl w-full max-h-[30px]"
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
              d="flex"
              alignItems="center"
            >
              <ExternalLinkIcon mr={1} />
              <Text>Open file in New Tab</Text>
            </Box>
          </a>
        )}
        <LinkPreview
          width="auto"
          showLoader={false}
          borderRadius={17}
          url={m.content}
          margin={m.image !== "" || m.audio !== "" ? "10px 0px" : "0px"}
        />
        <Linkify options={options}>
          <Text color="white">{m.content}</Text>
        </Linkify>
        <Box d="flex" alignItems="center" justifyContent="center">
          <Text fontSize="12px" marginRight="auto" d="flex" color="white">
            {formatDate(days[new Date(m.createdAt).getDay()])}{" "}
            {formatDate(new Date(m.createdAt).getDate())}{" "}
            {formatDate(months[new Date(m.createdAt).getMonth()])}{" "}
            {formatDate(new Date(m.createdAt).getHours())}:
            {formatDate(new Date(m.createdAt).getMinutes())}
          </Text>
          <Menu>
            <MenuButton>
              <ChevronDownIcon fontSize="2xl" color="white" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => deleteMessage(m)}>Delete</MenuItem>
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
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default MessageReceiver;
