import { Box, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <>
      <Box
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text fontSize="100" fontFamily="nunito">
          404
        </Text>
        <Text fontSize="3xl" fontFamily="nunito">
          Oops, sorry we can't find that page.
        </Text>
        <Button
          fontSize="xl"
          fontFamily="nunito"
          mt={6}
          onClick={() => {
            history.push("/@");
          }}
        >
          Go Back
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
