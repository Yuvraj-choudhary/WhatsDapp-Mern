import {
  FormControl,
  Box,
  useColorMode
} from "@chakra-ui/react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import AudioPlayer from "react-h5-audio-player";
import "./styles.css";
import ModalImage from "react-image-modal";
import { EmojiPicker } from "react-emoji-search";
import InputRoot from "./InputRoot";
import ShowEmoji from './footerIcons/ShowEmoji';
import AttachFile from './footerIcons/AttachFile';
import SendOrMic from './footerIcons/SendOrMic';
import { useState } from 'react';

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
  fileLoading
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <>
        {pic && (
          <>
            <IconButton
              onClick={() => {
                setPic();
              }}
              style={{
            marginTop: 8,
                color: colorMode === "dark" ? "#898787" : "#707070"
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
          </>
        )}
        {audio && (
          <>
            <IconButton
              onClick={() => {
                setAudio();
              }}
              style={{
                marginTop: 8,
                color: colorMode === "dark" ? "#898787" : "#707070"
              }}
            >
              <Close />
            </IconButton>
            <AudioPlayer src={audio} />
          </>
        )}
        {gif && (
          <>
            <IconButton
              onClick={() => {
                setGif("");
              }}
              style={{
                marginTop: 8,
                color: colorMode === "dark" ? "#898787" : "#707070"
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
          </>
        )}
        {video && (
          <>
            <IconButton
              onClick={() => setVideo()}
              style={{
                marginTop: 8,
                color: colorMode === "dark" ? "#898787" : "#707070"
              }}
            >
              <Close />
            </IconButton>
            <video src={video} controls={true} className="video"></video>
          </>
        )}
        {file && (
          <>
            <IconButton
              onClick={() => setFile()}
              style={{
                marginTop: 8,
                color: colorMode === "dark" ? "#898787" : "#707070"
              }}
            >
              <Close />
            </IconButton>
            <embed src={file} className="file"></embed>
          </>
        )}
      </>
      {showPicker && !showGifPicker ? (
        <Box h="80%" w="100%">
          <EmojiPicker
            emojiVersion={14.0}
            emojiSize={45}
            onEmojiClick={(e) => onEmojiClick(e)}
            tabsVariant="fullWidth"
            set="native"
            mode={colorMode === "dark" ? "dark" : "light"}
          />
        </Box>
      ) : (
        <></>
      )}
      <FormControl
        onKeyDown={sendMessage}
        isRequired
        w="100%"
        fontFamily="Nunito"
        d="flex"
        justifyContent="center"
        alignItems="center"
        h={pic || audio || gif || video || showPicker ? "100%" : ""}
        pt={3}
        px={2}
      >
        <>
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
        </>
      </FormControl>
    </>
  );
};

export default Footer;
