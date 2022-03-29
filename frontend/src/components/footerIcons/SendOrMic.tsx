import { Spinner } from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import { Mic } from "@material-ui/icons";
import Send from "../icons/Send";

const SendOrMic = ({
  newMessage,
  pic,
  audio,
  gif,
  video,
  colorMode,
  sendMessageButton,
  picLoading,
  audioLoading,
  videoLoading,
  fileLoading,
  postAudio,
}) => {
  return (
    <>
      {newMessage ||
      newMessage.trim() !== "" ||
      pic ||
      audio ||
      gif ||
      video ? (
        <>
          <IconButton
            style={{
              marginLeft: 5,
              color: colorMode === "dark" ? "#898787" : "#707070",
            }}
            onClick={sendMessageButton}
          >
            <Send />
          </IconButton>
        </>
      ) : picLoading || audioLoading || videoLoading || fileLoading ? (
        <IconButton
          disableRipple
          style={{
            marginLeft: 7,
            color: colorMode === "dark" ? "#898787" : "#707070",
          }}
        >
          <Spinner />
        </IconButton>
      ) : (
        <label htmlFor="contained-button-file">
          <input
            id="contained-button-file"
            type="file"
            accept="audio/*"
            capture
            style={{
              display: "none",
            }}
            onChange={(e: any) => postAudio(e.target.files[0])}
          />
          <IconButton
            component="span"
            style={{
              marginLeft: 5,
              marginRight: -10,
              color: colorMode === "dark" ? "#898787" : "#707070",
            }}
          >
            <Mic />
          </IconButton>
        </label>
      )}
    </>
  );
};

export default SendOrMic;
