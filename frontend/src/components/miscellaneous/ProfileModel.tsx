import {
  Box,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box>
        {children ? (
            <Text onClick={onOpen}>{children}</Text>
        ) : (
            <Text fontFamily="Nunito" p={4} fontSize={18} onClick={onOpen}>
              View Profile
            </Text>
        )}

        <Modal
            size="4xl"
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset="slideInBottom"
        >
          <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
          <ModalContent h="auto">
            <ModalHeader
                fontSize="40px"
                fontFamily="Nunito"
                display="flex"
                justifyContent="center"
            >
              {user.name}
            </ModalHeader>
            <ModalCloseButton borderRadius="50%" fontSize="15px" variant="" />
            <ModalBody
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
            >
              <Img borderRadius="5%" w="400px" src={user.pic} alt={user.name} />
            </ModalBody>
            <ModalFooter display="flex" alignItems="center" justifyContent="center">
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