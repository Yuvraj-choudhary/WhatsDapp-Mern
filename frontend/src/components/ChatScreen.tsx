import { Box, Spinner } from "@chakra-ui/react";
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
  postFile
}) => {
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
      />
      {pic || audio || gif || video || file || showPicker ? (
        <></>
      ) : (
        <Box
          d="flex"
          flexDir="column"
          justifyContent="flex-end"
          paddingInline={3}
          w="100%"
          h="100%"
          borderRadius={!showPicker ? "3xl" : "0.5rem 0.5rem 0 0"}
          overflowY="hidden"
          bg={colorMode === "dark" ? "#2d3748" : "white"}
        >
          {loading ? (
            <Spinner size="xl" w={20} h={20} alignSelf="center" margin="auto" />
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
      />
    </>
  );
};

export default ChatScreen;
