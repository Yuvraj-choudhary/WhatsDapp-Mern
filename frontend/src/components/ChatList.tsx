import { Stack } from "@chakra-ui/react";
import ChatListItem from './ChatListItem';

const ChatItem = ({
  searchChat,
  getSender,
  loggedUser,
  setSelectedChat,
  selectedChat,
  colorMode,
  getSenderPic,
  chats,
}) => {
  return (
    <Stack overflowY="scroll" w="100%" h="100vh">
      {chats
        .filter((chat) => {
          if (searchChat === "") {
            return chat;
          } else if (
            !chat.isGroupChat
              ? getSender(loggedUser, chat.users)
                  .toLowerCase()
                  .includes(searchChat.toLowerCase())
              : chat.chatName.toLowerCase().includes(searchChat.toLowerCase())
          ) {
            return chat;
          }
        })
        .map((chat) => (
          <ChatListItem
            getSender={getSender}
            loggedUser={loggedUser}
            setSelectedChat={setSelectedChat}
            chat={chat}
            selectedChat={selectedChat}
            colorMode={colorMode}
            getSenderPic={getSenderPic}
          />
        ))}
    </Stack>
  );
};

export default ChatItem;
