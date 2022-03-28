import { Box, FormControl, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { EmojiPicker } from "react-emoji-search";
import AudioPlayer from "react-h5-audio-player";
import ModalImage from "react-image-modal";
import AttachFile from "./footerIcons/AttachFile";
import SendOrMic from "./footerIcons/SendOrMic";
import ShowEmoji from "./footerIcons/ShowEmoji";
import InputRoot from "./InputRoot";
import "./styles.css";

const Footer = ({
  sendMessage,
  setShowPicker,
  sendMessageButton,
  newMessage,
  typingHandler,
  pic,
  postDetails,
  picLoading,
  setPic,
  file,
  setFile,
  postAudio,
  postFile,
  audio,
  audioLoading,
  setAudio,
  showPicker,
  setShowGifPicker,
  showGifPicker,
  gif,
  setGif,
  postVideo,
  videoLoading,
  video,
  setVideo,
  onEmojiClick,
  fileLoading,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box overflow="scroll">
        <>
          {pic && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <IconButton
                onClick={() => {
                  setPic();
                }}
                style={{
                  marginTop: 8,
                  color: colorMode === "dark" ? "#898787" : "#707070",
                }}
              >
                <Close />
              </IconButton>
              <ModalImage
                showRotation={true}
                showZoom={true}
                showDownload={true}
                src={pic}
                alt=""
                className="image2"
              />
            </Box>
          ) : (
            <></>
          )}
          {audio && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <IconButton
                onClick={() => {
                  setAudio();
                }}
                style={{
                  marginTop: 8,
                  color: colorMode === "dark" ? "#898787" : "#707070",
                }}
              >
                <Close />
              </IconButton>
              <AudioPlayer src={audio} />
            </Box>
          ) : (
            <></>
          )}
          {gif && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <IconButton
                onClick={() => {
                  setGif("");
                }}
                style={{
                  marginTop: 8,
                  color: colorMode === "dark" ? "#898787" : "#707070",
                  alignSelf: "center",
                }}
              >
                <Close />
              </IconButton>
              <ModalImage
                showRotation={true}
                showZoom={true}
                src={gif}
                alt=""
                className="image2"
              />
            </Box>
          ) : (
            <></>
          )}
          {video && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <IconButton
                onClick={() => setVideo()}
                style={{
                  marginTop: 8,
                  color: colorMode === "dark" ? "#898787" : "#707070",
                  alignSelf: "center",
                }}
              >
                <Close />
              </IconButton>
              <video src={video} controls={true} className="video"></video>
            </Box>
          ) : (
            <></>
          )}
          {file && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <IconButton
                onClick={() => setFile()}
                style={{
                  marginTop: 8,
                  color: colorMode === "dark" ? "#898787" : "#707070",
                }}
              >
                <Close />
              </IconButton>
              <iframe src={file} className="file"></iframe>
            </Box>
          ) : (
            <></>
          )}
        </>
        {showPicker && !showGifPicker ? (
          // <Box h="80%">
          <EmojiPicker
            emojiVersion={14.0}
            emojiSize={45}
            onEmojiClick={(e) => onEmojiClick(e)}
            tabsVariant="fullWidth"
            set="native"
            styles={{
              backgroundColor: colorMode === "dark" ? "#2d3748" : "#fff",
            }}
            mode={colorMode === "dark" ? "dark" : "light"}
          />
        ) : (
          // </Box>
          <></>
        )}
      </Box>
      <FormControl
        onKeyDown={sendMessage}
        isRequired
        w="100%"
        fontFamily="Nunito"
        d="flex"
        justifyContent="center"
        alignItems="center"
        // h={pic || audio || gif || video || showPicker ? "100%" : ""}
        pt={3}
        px={2}
      >
        <ShowEmoji
          showGifPicker={showGifPicker}
          colorMode={colorMode}
          setShowGifPicker={setShowGifPicker}
          setShowPicker={setShowPicker}
        />
        <AttachFile
          showPicker={showPicker}
          showGifPicker={showGifPicker}
          colorMode={colorMode}
          setShowGifPicker={setShowGifPicker}
          postDetails={postDetails}
          postVideo={postVideo}
          postFile={postFile}
        />
        <InputRoot newMessage={newMessage} typingHandler={typingHandler} />
        <SendOrMic
          newMessage={newMessage}
          pic={pic}
          audio={audio}
          gif={gif}
          video={video}
          colorMode={colorMode}
          sendMessageButton={sendMessageButton}
          picLoading={picLoading}
          audioLoading={audioLoading}
          videoLoading={videoLoading}
          fileLoading={fileLoading}
          postAudio={postAudio}
        />
      </FormControl>
    </>
  );
};

export default Footer;
