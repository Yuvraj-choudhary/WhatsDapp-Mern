import { Box, FormControl, SlideFade, useColorMode } from "@chakra-ui/react";
import { EmojiPicker } from "react-emoji-search";
import Picker from "react-giphy-component";
import AudioPlayer from "react-h5-audio-player";
import ModalImage from "react-image-modal";
import Zoom from "react-medium-image-zoom";
import AttachFile from "./footerIcons/AttachFile";
import SendOrMic from "./footerIcons/SendOrMic";
import ShowEmoji from "./footerIcons/ShowEmoji";
import InputRoot from "./InputRoot";
import "./styles.css";
import "react-medium-image-zoom/dist/styles.css";  

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
  isRecording,
  setIsRecording,
  isAudioRecording,
  setIsAudioRecording,
}) => {
  const { colorMode } = useColorMode();
  const isPreview = pic || video || file || gif;

  const onStop = (audioData) => {
    console.log("audioData", audioData);
    setAudio(audioData.url);
  };

  return (
    <>
      <>
        <Box overflow="scroll">
          {pic && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <Zoom
                transitionDuration={600}
                zoomZindex={0}
                overlayBgColorEnd="RGBA(255,255,255,0.09)"
              >
                <ModalImage
                  showRotation={true}
                  showZoom={true}
                  showDownload={true}
                  src={pic}
                  alt=""
                  className="image2"
                />
              </Zoom>
            </Box>
          ) : (
            <></>
          )}
          {gif && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
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
              <video src={video} controls={true} className="video"></video>
            </Box>
          ) : (
            <></>
          )}
          {file && !showPicker ? (
            <Box alignItems="center" d="flex" flexDir="column">
              <iframe src={file} className="file"></iframe>
            </Box>
          ) : (
            <></>
          )}
        </Box>
        <SlideFade in={showPicker} className="🎚️">
          {showPicker && !showGifPicker ? (
            <EmojiPicker
              emojiVersion={14.0}
              emojiSize={40}
              sheetSize={32}
              emojiSpacing={20}
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
        </SlideFade>
        {isPreview ? (
          <>
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
                showPicker={showPicker}
              />
              <InputRoot
                newMessage={newMessage}
                typingHandler={typingHandler}
                placeholder="Add a caption..."
                setShowPicker={setShowPicker}
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
                setIsAudioRecording={setIsAudioRecording}
                isRecording={isRecording}
                onStop={onStop}
                isAudioRecording={isAudioRecording}
                setIsRecording={setIsRecording}
              />
            </FormControl>
          </>
        ) : (
          <>
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
              {audio ? (
                <AudioPlayer
                  src={audio}
                  style={{
                    backgroundColor: colorMode === "dark" ? "#232b38" : "#fff",
                    color: colorMode === "dark" ? "#fff" : "#333",
                  }}
                />
              ) : (
                <>
                  <ShowEmoji
                    showGifPicker={showGifPicker}
                    colorMode={colorMode}
                    setShowGifPicker={setShowGifPicker}
                    setShowPicker={setShowPicker}
                    showPicker={showPicker}
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
                    setShowPicker={setShowPicker}
                  />
                </>
              )}
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
                setIsAudioRecording={setIsAudioRecording}
                isRecording={isRecording}
                onStop={onStop}
                isAudioRecording={isAudioRecording}
                setIsRecording={setIsRecording}
              />
            </FormControl>
          </>
        )}
      </>
    </>
  );
};

export default Footer;
