import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import UserBadgeItem from "../userStufs/UserBadgeItem";
import UserListItem from "../userStufs/UserListItem";

const UpdateGroup = ({
  fetchMessages,
  fetchAgain,
  setFetchAgain
}) => {
  const { isOpen, onOpen, onClose }: any = useDisclosure();
  const [groupChatName, setGroupChatName]: any = useState();
  const [search, setSearch]: any = useState("");
  const [searchResult, setSearchResult]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [renameloading, setRenameLoading]: any = useState(false);
    const [picLoading, setPicLoading]: any = useState(false);
    const [pic, setPic]: any = useState();
  const toast = useToast();

  const { selectedChat, setSelectedChat, user }: any = ChatState();

  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left"
      });
      setLoading(false);
    }
  };

  const handleRename = async () => {
    if (!groupChatName) return;

    try {
      setRenameLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.put(
        `/api/chat/rename`,
        {
          chatId: selectedChat._id,
          chatName: groupChatName
        },
        config
      );

      console.log(data._id);
      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setRenameLoading(false);
    } catch (error: any) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setRenameLoading(false);
    }
    setGroupChatName("");
  };

  const handleAddUser = async (user1: any) => {
    if (selectedChat.users.find((u: any) => u._id === user1._id)) {
      toast({
        title: "User Already in group!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    if (selectedChat.groupAdmin._id !== user._id) {
      toast({
        title: "Only admins can add someone!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.put(
        `/api/chat/groupadd`,
        {
          chatId: selectedChat._id,
          userId: user1._id
        },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
    } catch (error: any) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
    }
    setGroupChatName("");
  };

  const handleRemove = async (user1) => {
    if (selectedChat.groupAdmin._id !== user._id && user1._id !== user._id) {
      toast({
        title: "Only admins can remove someone!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      };
      const { data } = await axios.put(
        `/api/chat/groupremove`,
        {
          chatId: selectedChat._id,
          userId: user1._id
        },
        config
      );

      user1._id === user._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
      setLoading(false);
    } catch (error: any) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom"
      });
      setLoading(false);
    }
    setGroupChatName("");
  };

    // const handleSubmit = async () => {
    //   if (!groupChatName || !selectedUser) {
    //     toast({
    //       title: "Please fill all the feilds",
    //       status: "warning",
    //       duration: 5000,
    //       isClosable: true,
    //       position: "top"
    //     });
    //     return;
    //   }

    //   try {
    //     const config = {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`
    //       }
    //     };
    //     const { data } = await axios.post(
    //       `/api/chat/group`,
    //       {
    //         name: groupChatName,
    //         pic: pic,
    //         users: JSON.stringify(selectedUser.map((u: any) => u._id))
    //       },
    //       config
    //     );
    //     setChats([data, ...chats]);
    //     onClose();
    //     toast({
    //       title: "New Group Chat Created!",
    //       status: "success",
    //       duration: 5000,
    //       isClosable: true,
    //       position: "bottom"
    //     });
    //   } catch (error: any) {
    //     toast({
    //       title: "Failed to Create the Chat!",
    //       description: error.response.data,
    //       status: "error",
    //       duration: 5000,
    //       isClosable: true,
    //       position: "bottom"
    //     });
    //   }
    // };

  return (
    <>
      <Tooltip label="View the chat" hasArrow placement="bottom-end">
        <Text p={5} fontSize={22} onClick={onOpen}>
          Update Group
        </Text>
      </Tooltip>

      <Modal
        size="3xl"
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent minHeight="450px">
          <ModalHeader
            fontSize="35px"
            fontFamily="Nunito"
            d="flex"
            justifyContent="center"
          >
            {selectedChat.chatName}
          </ModalHeader>

          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box w="100%" d="flex" flexWrap="wrap" pb={3}>
              {selectedChat.users.map((u) => (
                <UserBadgeItem
                  key={u._id}
                  user={u}
                  handleFunction={() => handleRemove(u)}
                />
              ))}
            </Box>
            <FormControl d="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="teal"
                ml={1}
                isLoading={renameloading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add User to group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>

            {loading ? (
              <Spinner size="3xl" />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => handleAddUser(user)}
                />
              ))
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleRemove(user)} colorScheme="red">
              Leave Group
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateGroup;
