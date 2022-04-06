import { Box } from "@chakra-ui/react";
import SyncLoader from "react-spinners/SyncLoader";

const MessageLoader = () => {
  return (
    <Box
      style={{
        backgroundColor: "#2b6bed",
        boxShadow: "-1px 4px 20px -6px rgb(0 0 0 / 20%)",
        marginLeft: 0,
        borderRadius: "20px 20px 20px 9px",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <SyncLoader color="#fff" />
    </Box>
  );
};

export default MessageLoader;
