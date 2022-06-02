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
}:any) => {
  return (
    <Stack overflowY="scroll" w="100%" h="100vh" paddingInline="15px">
      {chats
        .filter((chat:any) => {
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
        .map((chat:any) => (
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
