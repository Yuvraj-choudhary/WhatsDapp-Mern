import { Box, FormControl, Image, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { EmojiPicker } from "react-emoji-search";
import Picker from "react-giphy-component";
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
  setGifHandler,
}) => {
  const { colorMode } = useColorMode();

  const isPreview = pic || audio || video || file || gif;

  return (
    <>
      <>
        <Box overflow="scroll">
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
        </Box>
        {showPicker && !showGifPicker ? (
          <EmojiPicker
            emojiVersion={14.0}
            emojiSize={45}
            onEmojiClick={(e) => onEmojiClick(e)}
            set="native"
            tabsVariant="fullWidth"
            styles={{
              backgroundColor: colorMode === "dark" ? "#2d3748" : "#fff",
              indicatorColor: colorMode !== "dark" ? "#232b38" : "#f9f2f5",
              fontColor: "lightgrey",
              searchBackgroundColor:
                colorMode === "dark" ? "#232b38" : "#f9f2f5",
              tabsFontColor: colorMode !== "dark" ? "#232b38" : "#f9f9f9",
              searchFontColor: "lightgrey",
              skinTonePickerBackgroundColor:
                colorMode === "dark" ? "#232b38" : "#f9f2f5",
            }}
            mode={colorMode === "dark" ? "dark" : "light"}
          />
        ) : (
          <></>
        )}
        {showGifPicker && (
          <Picker
            apiKey="P9bkVJ0Z7fcRkW7dRCrZz7BgNsrtc30f"
            onSelected={(p: any) => setGifHandler(p.downsized.url)}
            width="100%"
          />
        )}
        {isPreview ? (
          <>
            <FormControl
              isRequired
              w="100%"
              fontFamily="Nunito"
              d="flex"
              justifyContent="center"
              alignItems="center"
              px={20}
              marginLeft={10}
              mt="auto"
            >
              <InputRoot
                newMessage={newMessage}
                typingHandler={typingHandler}
                placeholder="Add a caption..."
              />
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
            {/* <Box
              mt={5}
              bg={colorMode === "dark" ? "#232b38" : "#e5e7eb"}
              w="100%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              h="125px"
              mb={-2}
              mr={-5}
            >
              <Image src={pic} className="ratio" />
            </Box> */}
          </>
        ) : (
          <FormControl
            onKeyDown={sendMessage}
            isRequired
            w="100%"
            fontFamily="Nunito"
            d="flex"
            justifyContent="center"
            alignItems="center"
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
            <InputRoot
              newMessage={newMessage}
              typingHandler={typingHandler}
              placeholder="Type a message"
            />
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
        )}
      </>
    </>
  );
};

export default Footer;
