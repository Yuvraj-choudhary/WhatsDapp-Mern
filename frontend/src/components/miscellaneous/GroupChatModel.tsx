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
    useDisclosure,
    useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import "../styles.css";
import UserBadgeItem from "../userStufs/UserBadgeItem";
import UserListItem from "../userStufs/UserListItem";

const GroupChatModel = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [groupChatName, setGroupChatName]: any = useState();
  const [selectedUser, setSelectedUser]: any = useState([]);
  const [search, setSearch]: any = useState("");
  const [searchResult, setSearchResult]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [picLoading, setPicLoading]: any = useState(false);
  const [pic, setPic]: any = useState();

  const toast = useToast();

  const { user, chats, setChats }: any = ChatState();

  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
    } catch (error: any) {
      toast({
        title: "Failed to Create the Chat!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app-mern");
      data.append("cloud_name", "yuvraj-choudahry-dev");
      fetch(
        "https://api.cloudinary.com/v1_1/yuvraj-choudahry-dev/image/upload",
        {
          method: "post",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          setPicLoading(false);
        });
    } else {
      setPicLoading(false);
      return;
    }
  };

  const handleSubmit = async () => {
    if (!groupChatName || !selectedUser) {
      toast({
        title: "Please fill all the feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/chat/group`,
        {
          name: groupChatName,
          pic: pic,
          users: JSON.stringify(selectedUser.map((u: any) => u._id)),
        },
        config
      );
      setChats([data, ...chats]);
      onClose();
      toast({
        title: "New Group Chat Created!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error: any) {
      toast({
        title: "Failed to Create the Chat!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const handleDelete = (u: any) => {
    setSelectedUser(selectedUser.filter((s: any) => s._id !== u._id));
  };

  const handleGroup = (userToAdd: any) => {
    if (selectedUser.includes(userToAdd)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setSelectedUser([...selectedUser, userToAdd]);
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        size="4xl"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent minHeight="550px">
          <ModalHeader
            fontSize="35px"
            fontFamily="Nunito"
            display="flex"
            justifyContent="center"
          >
            Create Group Chat
          </ModalHeader>
          <ModalCloseButton borderRadius="50%" fontSize="15px" variant="" />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <FormControl>
              <Input
                placeholder="Chat Name"
                mb={30}
                p={1.5}
                h="50px"
                onChange={(e) => setGroupChatName(e.target.value)}
                borderColor="rgb(255 255 255 / 0%)"
                boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
              />
            </FormControl>
            <FormControl>
              <Input
                type="file"
                p={1.5}
                h="50px"
                mb={30}
                accept="image/*"
                onChange={(e: any) => postDetails(e.target.files[0])}
                borderColor="rgb(255 255 255 / 0%)"
                boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add Users eg: yuvraj, gorge, dani, dream"
                mb={30}
                p={1.5}
                h="50px"
                onChange={(e) => handleSearch(e.target.value)}
                borderColor="rgb(255 255 255 / 0%)"
                boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
              />
            </FormControl>
            <Box w="100%" display="flex" flexWrap="wrap">
              {selectedUser.map((u) => (
                <UserBadgeItem
                  key={user._id}
                  user={u}
                  handleFunction={() => handleDelete(u)}
                />
              ))}
            </Box>
            {loading ? (
              <Spinner ml="auto" display="flex" />
            ) : (
              searchResult
                ?.slice(0, 4)
                .map((user) => (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => handleGroup(user)}
                  />
                ))
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Go
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupChatModel;
