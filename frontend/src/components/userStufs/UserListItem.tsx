import { Avatar, Box, Text, useColorMode } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }:any) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      w="100%"
      display="flex"
      alignItems="center"
      px={3}
      py={2}
      mb={2}
      borderRadius="xl"
      boxShadow="inner"
      className="transition-all duration-1000 ease-in-out"
      bg={colorMode === "dark" ? "#232b38" : "#E8E8E8"}
      _hover={{
        backgroundColor: "#38B2AC",
        color: "white",
        boxShadow: "md",
      }}
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text fontFamily="Nunito">{user.name}</Text>
        <Text fontFamily="Nunito" fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
