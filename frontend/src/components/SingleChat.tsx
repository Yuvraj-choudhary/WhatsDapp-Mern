import { Box, Text, useColorMode, useToast } from "@chakra-ui/react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { ChatState } from "../context/ChatProvider";
import { storage } from "../firebase";
import ChatScreen from "./ChatScreen";
import "./styles.css";

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://chatdapp-mern.herokuapp.com"
    : "http://localhost:8000";
var socket: any, selectedChatCompare: any;

const SingleChat = ({ fetchAgain, setFetchAgain }: any) => {
  const [message, setMessage]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [newMessage, setNewMessage]: any = useState("");
  const [socketConnected, setSocketConnected]: any = useState(false);
  const [typing, setTyping]: any = useState(false);
  const [isTyping, setIsTyping]: any = useState(false);
  const [showPicker, setShowPicker]: any = useState(false);
  const [showGifPicker, setShowGifPicker]: any = useState(false);
  const [gif, setGif]: any = useState("");
  const [picLoading, setPicLoading]: any = useState(false);
  const [pic, setPic]: any = useState("");
  const [audioLoading, setAudioLoading]: any = useState(false);
  const [audio, setAudio]: any = useState("");
  const [isRecording, setIsRecording]: any = useState();
  const [isAudioRecording, setIsAudioRecording]: any = useState(false);
  const [videoLoading, setVideoLoading]: any = useState(false);
  const [video, setVideo]: any = useState("");
  const [fileLoading, setFileLoading]: any = useState(false);
  const [star, setStar]: any = useState(false);
  const [file, setFile]: any = useState("");
  const [isOnline, setIsOnline]: any = useState(false);
  const audioPlay = new Audio(
    "https://firebasestorage.googleapis.com/v0/b/storage-1a7bb.appspot.com/o/files%2Fimessage_send_sound%20(1).mp3?alt=media&token=6a7cf28e-d678-406a-9473-b1a6b4751cff"
  );

  const toast = useToast();
  const { colorMode } = useColorMode();

  const {
    user,
    selectedChat,
    setSelectedChat,
    setNotification,
    notification,
  }: any = ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );

      setMessage(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message received", (newMessages: any) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessages.chat._id
      ) {
        if (!notification.includes(newMessages)) {
          setNotification([newMessages, ...notification]);
          setFetchAgain(!fetchAgain);
        }
        setIsOnline(false);
      } else {
        setMessage([...message, newMessages]);
        setIsOnline(true);
      }
    });
  });

  const postDetails = (file: any) => {
    if (!file.type.match("image.*")) {
      alert("Please select image only.");
    } else {
      var reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          setPic(reader.result);
        },
        false
      );

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const postVideo = (e: any) => {
    setVideoLoading(true);
    const data = new FormData();
    data.append("file", e);
    data.append("upload_preset", "chat-app-mern");
    data.append("cloud_name", "yuvraj-choudahry-dev");
    fetch("https://api.cloudinary.com/v1_1/yuvraj-choudahry-dev/video/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setVideo(data.url.toString());
        console.log(data.url.toString());
        setVideoLoading(false);
      })
      .catch((err) => {
        setVideoLoading(false);
      });
  };

  const postAudio = (e: any) => {
    setAudioLoading(true);
    const data = new FormData();
    data.append("file", e);
    data.append("upload_preset", "chat-app-mern");
    data.append("cloud_name", "yuvraj-choudahry-dev");
    fetch("https://api.cloudinary.com/v1_1/yuvraj-choudahry-dev/video/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setAudio(data.url.toString());
        console.log(data.url.toString());
        setAudioLoading(false);
      })
      .catch((err) => {
        setAudioLoading(false);
      });
  };

  const postFile = (e: any) => {
    setFileLoading(true);

    if (!e) return;
    if (e.type !== "image/*" || e.type !== "video/*") {
      const storageRef = ref(storage, `/files/${e.name}`);
      const uploadTask = uploadBytesResumable(storageRef, e);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
          console.log(err);
          setFileLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url: any) => {
            console.log(url);
            setFile(url);
            setFileLoading(false);
          });
        }
      );
    } else {
      setFileLoading(false);
      return;
    }
  };

  const setGifHandler = (e: any) => {
    setGif(e);
    setShowGifPicker(false);
    setShowPicker(false);
  };

  const sendMessage = async (e: any) => {
    if (
      e.keyCode === 13 &&
      newMessage.trim() !== "" &&
      (newMessage || pic || audio || gif || video)
    ) {
      e.preventDefault();
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        const { data } = await axios.post(
          "api/message",
          {
            content: newMessage,
            image: pic,
            audio: audio,
            file: file,
            chatId: selectedChat._id,
            gif: gif,
            video: video,
            star: star,
          },
          config
        );

        socket.emit("new message", data);
        setNewMessage("");
        setShowPicker(false);
        setPic("");
        setAudio("");
        setGif("");
        setVideo("");
        setFile("");
        audioPlay.play();
        setMessage([...message, data]);
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  const sendMessageButton = async () => {
    if (
      (newMessage && newMessage.trim() !== "") ||
      pic ||
      audio ||
      gif ||
      video
    ) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.post(
          "api/message",
          {
            content: newMessage,
            image: pic,
            file: file,
            audio: audio,
            chatId: selectedChat._id,
            gif: gif,
            video: video,
          },
          config
        );

        socket.emit("new message", data);
        setNewMessage("");
        setShowPicker(false);
        setPic("");
        setAudio("");
        setGif("");
        setVideo("");
        setFile("");
        audioPlay.play();
        setMessage([...message, data]);
      } catch (error) {
        toast({
          title: "Error Occurred!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  const typingHandler = (e: any) => {
    setNewMessage(e);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  const onEmojiClick = (emojiObject: any) => {
    setNewMessage((p: any) => p + emojiObject);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 1000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  const deleteMessage = async (m: any) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/message/messages`,
        {
          _id: m._id,
        },
        config
      );

      fetchMessages();
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Delete the Message",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const deleteChat = async () => {
    setSelectedChat();
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.put(
        "/api/chat/remove",
        {
          _id: selectedChat._id,
        },
        config
      );
      setFetchAgain(!fetchAgain);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to Delete the Chat",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      {selectedChat ? (
        <ChatScreen
          colorMode={colorMode}
          setSelectedChat={setSelectedChat}
          message={message}
          user={user}
          fetchMessages={fetchMessages}
          deleteChat={deleteChat}
          fetchAgain={fetchAgain}
          setFetchAgain={setFetchAgain}
          selectedChat={selectedChat}
          pic={pic}
          audio={audio}
          gif={gif}
          video={video}
          file={file}
          showPicker={showPicker}
          loading={loading}
          isTyping={isTyping}
          deleteMessage={deleteMessage}
          showGifPicker={showGifPicker}
          setGifHandler={setGifHandler}
          newMessage={newMessage}
          sendMessageButton={sendMessageButton}
          sendMessage={sendMessage}
          setShowPicker={setShowPicker}
          typingHandler={typingHandler}
          postDetails={postDetails}
          picLoading={picLoading}
          setPic={setPic}
          postAudio={postAudio}
          audioLoading={audioLoading}
          videoLoading={videoLoading}
          fileLoading={fileLoading}
          setAudio={setAudio}
          setShowGifPicker={setShowGifPicker}
          setGif={setGif}
          postVideo={postVideo}
          setVideo={setVideo}
          onEmojiClick={onEmojiClick}
          setFile={setFile}
          postFile={postFile}
          star={star}
          setStar={setStar}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
          isOnline={isOnline}
          isAudioRecording={isAudioRecording}
          setIsAudioRecording={setIsAudioRecording}
        />
      ) : (
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Nunito">
            Click on a user or a group to start chating
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
