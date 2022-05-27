import { Box, Text } from "@chakra-ui/react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ChatHeader from "./ChatHeader";
import Footer from "./Footer";
import ScrollableChat from "./ScrollableChat";
import "./styles.css";

const ChatScreen = ({
  colorMode,
  setSelectedChat,
  message,
  user,
  fetchMessages,
  deleteChat,
  fetchAgain,
  setFetchAgain,
  selectedChat,
  pic,
  audio,
  gif,
  video,
  file,
  showPicker,
  loading,
  isTyping,
  deleteMessage,
  showGifPicker,
  setGifHandler,
  newMessage,
  sendMessageButton,
  sendMessage,
  setShowPicker,
  typingHandler,
  postDetails,
  picLoading,
  setPic,
  postAudio,
  audioLoading,
  videoLoading,
  fileLoading,
  setAudio,
  setShowGifPicker,
  setGif,
  postVideo,
  setVideo,
  onEmojiClick,
  setFile,
  postFile,
  star,
  setStar,
  isRecording,
  setIsRecording,
  isAudioRecording,
  setIsAudioRecording,
}) => {
  const isPreview = pic || video || file || gif;
  return (
    <>
      <ChatHeader
        colorMode={colorMode}
        setSelectedChat={setSelectedChat}
        message={message}
        user={user}
        fetchMessages={fetchMessages}
        deleteChat={deleteChat}
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
        selectedChat={selectedChat}
        isPreview={isPreview}
        setPic={setPic}
        setAudio={setAudio}
        setVideo={setVideo}
        setFile={setFile}
        setGif={setGif}
        pic={pic}
        video={video}
        file={file}
        gif={gif}
      />
      {pic || gif || video || file || showPicker ? (
        <></>
      ) : (
        <Box
          display="flex"
          flexDir="column"
          justifyContent="ntent="flex-end"
          paddingInline={3}
          w="100%"
          h="100%"
          borderRadius={!showPicker ? "3xl" : "0.5rem 0.5rem 0 0"}
          overflowY="hidden"
          bg={colorMode === "dark" ? "#2d3748" : "white"}
        >
          {loading ? (
            <Box
              display="flex"
              flexDir="column"
              justifyContent="ntent="center"
              alignItems="center"
              h="100%"
              w="100%"
            >
              <ClimbingBoxLoader
                size={30}
                color={colorMode === "dark" ? "#efeff1" : "#1a202c"}
              />
              <Text fontFamily="nunito" mt={20}>
                It's Taking time because You Have More high Resolution Images or
                Very Long Messages
              </Text>
            </Box>
          ) : (
            <Box
              className="messages"
              bg={colorMode === "dark" ? "#2d3748" : "white"}
            >
              <ScrollableChat
                message={message}
                selectedChat={selectedChat}
                isTyping={isTyping}
                deleteMessage={deleteMessage}
                star={star}
                setStar={setStar}
              />
            </Box>
          )}
        </Box>
      )}
      <Footer
        newMessage={newMessage}
        sendMessageButton={sendMessageButton}
        sendMessage={sendMessage}
        setShowPicker={setShowPicker}
        typingHandler={typingHandler}
        postDetails={postDetails}
        pic={pic}
        picLoading={picLoading}
        setPic={setPic}
        postAudio={postAudio}
        audio={audio}
        audioLoading={audioLoading}
        videoLoading={videoLoading}
        fileLoading={fileLoading}
        setAudio={setAudio}
        showPicker={showPicker}
        setShowGifPicker={setShowGifPicker}
        showGifPicker={showGifPicker}
        gif={gif}
        setGif={setGif}
        postVideo={postVideo}
        video={video}
        setVideo={setVideo}
        onEmojiClick={onEmojiClick}
        file={file}
        setFile={setFile}
        postFile={postFile}
        setGifHandler={setGifHandler}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        isAudioRecording={isAudioRecording}
        setIsAudioRecording={setIsAudioRecording}
      />
    </>
  );
};

export default ChatScreen;
