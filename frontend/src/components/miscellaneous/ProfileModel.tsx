import {
  Avatar,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      {children ? (
        <Text fontFamily="Nunito" p={2} fontSize={18} onClick={onOpen}>
          {children}
        </Text>
      ) : (
          <Text fontFamily="Nunito" p={5} fontSize={22} onClick={onOpen}>
            View Profile
          </Text>
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
          <ModalCloseButton borderRadius="50%" fontSize="15px" variant="" />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Avatar boxSize="250px" src={user.pic} name={user.name} />
          </ModalBody>
          <ModalFooter d="flex" alignItems="center" justifyContent="center">
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Nunito">
              Email: {user.email}
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProfileModel;
