import {
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
    useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";

const SearchModal = ({ children }:any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setSearch] = useState("");

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="3xl"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
        <ModalContent>
          <ModalHeader
            fontSize="40px"
            fontFamily="Nunito"
            display="flex"
            justifyContent="center"
          >
            Search The Web
          </ModalHeader>
          <ModalCloseButton borderRadius="50%" fontSize="15px" variant="" />
          <ModalBody>
            <FormControl isRequired display="flex">
              <Input
                placeholder="Search The Web"
                onChange={(e) => setSearch(e.target.value)}
                borderColor="rgb(255 255 255 / 0%)"
                boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
              />
              {search ? (
                <>
                  <a
                    href={`https://www.google.com/search?q=${search}`}
                    target="_blank"
                  >
                    <Button variant="solid" colorScheme="teal" ml={2}>
                      Go
                    </Button>
                  </a>
                </>
              ) : (
                <Button variant="solid" colorScheme="teal" ml="10px" disabled>
                  Go
                </Button>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
