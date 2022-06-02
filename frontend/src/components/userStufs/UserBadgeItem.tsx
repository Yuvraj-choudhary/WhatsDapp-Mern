import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }:any) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="3xl"
      m={1}
      mb={2}
      fontSize={12}
      backgroundColor="#805ad5"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
