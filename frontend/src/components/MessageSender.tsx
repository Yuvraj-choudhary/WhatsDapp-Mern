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
import ModalImage from "react-image-modal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { isLastMessage, isSameReceiver } from "../config/ChatLogics";
import "./styles.css";

const MessageSender = ({
  m,
  i,
  message,
  deleteMessage,
  user,
  star,
  setStar,
}:any) => {
  const formatDate = (date: any) => {
    return date < 10 ? "0" + date : date;
  };

  const options = {
    target: "_blank",
    className: "link--s",
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
          backgroundColor: colorMode === "dark" ? "#232b38" : "#e6e6e6",
          marginLeft: "auto",
          boxShadow: "-1px 4px 20px -6px rgb(0 0 0 / 40%)",
          marginTop: 1.5,
          marginRight: 5,
          borderRadius:
            isSameReceiver(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? "20px"
              : "20px 20px 9px 20px",
          marginBottom:
            isSameReceiver(message, m, i, user._id) ||
            isLastMessage(message, i, user._id)
              ? "0px"
              : "20px",
          padding: "10px 10px",
        }}
        maxWidth={{ base: "80%", xl: "63%" }}
      >
        {m.image !== "" && (
          <Zoom
            transitionDuration={600}
            zoomZindex={0}
          >
            <Image src={m.image} alt="" className="image" />
          </Zoom>
        )}
        {m.audio !== "" && (
          <AudioPlayer
            src={m.audio}
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
              w="100%"
              h="250px"
              px="30px"
              color="#000"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
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
          <Text fontFamily="Nunito">{m.content}</Text>
        </Linkify>
        <Box
          display="flex"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <span
            style={{
              fontSize: "12px",
              marginRight: "auto",
              display: "flex",
              color: "GrayText",
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
              <ChevronDownIcon fontSize="2xl" color="GrayText" />
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

export default MessageSender;
