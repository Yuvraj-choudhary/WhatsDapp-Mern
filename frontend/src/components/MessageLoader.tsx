import { Box } from "@chakra-ui/react";
import PulseLoader from "react-spinners/PulseLoader";

const MessageLoader = () => {
  return (
    <Box
      style={{
        backgroundColor: "#2b6bed",
        boxShadow: "-1px 4px 20px -6px rgb(0 0 0 / 20%)",
        marginLeft: 0,
        marginTop: 6,
        borderRadius: "20px 20px 20px 9px",
        marginBottom: "20px",
        padding: "10px 10px",
      }}
    >
      <PulseLoader color="#cfcfcf" />
    </Box>
  );
};

export default MessageLoader;
