import {
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

const Chatdapp = ({ children }:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        size="3xl"
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
          ></ModalHeader>
          <ModalCloseButton borderRadius="50%" fontSize="15px" variant="" />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Nunito">
              Created By :{" "}
              <a href="https://www.github.com/Yuvraj-choudhary" target="_blank">
                Yuvraj Choudhary 😜
              </a>
              ,
            </Text>
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Nunito">
              Coded By :{" "}
              <a href="https://www.github.com/Yuvraj-choudhary" target="_blank">
                Yuvraj Choudhary 😒
              </a>
              ,
            </Text>
            <Text fontSize={{ base: "28px", md: "30px" }} fontFamily="Nunito">
              Deployed By :{" "}
              <a href="https://www.github.com/Yuvraj-choudhary" target="_blank">
                Yuvraj Choudhary 😉
              </a>
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Chatdapp;
