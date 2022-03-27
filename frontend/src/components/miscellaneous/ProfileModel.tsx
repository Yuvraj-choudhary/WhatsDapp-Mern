import { ViewIcon } from "@chakra-ui/icons";
import { Avatar } from "@material-ui/core";
import { ChatState } from "../../context/ChatProvider";
import {
  Box,
  Button,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure
} from "@chakra-ui/react";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <Tooltip label="View the chat" hasArrow placement="bottom-end">
          <Text p={5} fontSize={22} onClick={onOpen}>
            View Profile
          </Text>
        </Tooltip>
      )}

      <Modal
        size="3xl"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent minHeight="450px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Nunito"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
              <Avatar
                component="span"
                src={user.pic}
                alt={user.name}
                style={{ width: "300px", height: "300px" }}
                className="transition-all rounded h-full w-full hover:opacity-50"
              />
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Nunito">
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProfileModel;
