import { Box, Image, Text } from "@chakra-ui/react";
import LinearProgress from "@material-ui/core/LinearProgress";
import chatdapp from "../512x512.png";
import Lock from "../components/icons/Lock";

const Loadingpage = ({ colorMode, progress }) => {
  return (
    <Box className="component" bg={colorMode === "dark" ? "#2d3748" : "#fff"}>
      <Image src={chatdapp} width={70} mb={10} />

      <LinearProgress
        variant="determinate"
        value={progress}
        color="primary"
        style={{
          paddingInline: "30%",
        }}
      />

      <Text mt={10} color="#4f5f69">
        ChatDapp
      </Text>
      <Text mt={3} color="#909ea8" display="flex" alignItems="center">
        <Lock />
        End-To-end encrypted
      </Text>
    </Box>
  );
};

export default Loadingpage;
