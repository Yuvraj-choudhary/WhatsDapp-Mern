import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext({});

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat]: any = useState();
  const [user, setUser]: any = useState();
  const [userPic, setUserPic]: any = useState();
  const [notification, setNotification]: any = useState([]);
  const [chats, setChats]: any = useState();
  const [isLoggedIn, setIsLoggedIn]:any = useState()

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
    setUser(userInfo);

    if (!userInfo) setIsLoggedIn(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        userPic,
        setUserPic,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
