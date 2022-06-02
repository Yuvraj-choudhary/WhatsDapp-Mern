import { Box, Image, Text } from "@chakra-ui/react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect } from "react";
import chatdapp from "../512x512.png";
import Lock from "../components/icons/Lock";

const Loadingpage = ({ colorMode, progress, setLoading, setProgress }) => {
  useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 150;
        return Math.min(oldProgress + diff, 100);
      });
    }, 700);

    setTimeout(() => {
      setLoading(false);
    }, 1222);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      className="component"
      bg={colorMode === "dark" ? "#2d3748" : "#fff"}
      h="100vh"
    >
      <Image src={chatdapp} width={70} mb={10} />

      <LinearProgress
        variant="determinate"
        value={progress}
        color="primary"
        style={{
          paddingInline: "30%",
        }}
      />

      <Text mt={10} color="#4f5f69" fontFamily="Nunito">
        ChatDapp
      </Text>
      <Text
        mt={3}
        color="#909ea8"
        display="flex"
        alignItems="center"
        fontFamily="Nunito"
      >
        <Lock />
        End-To-end encrypted
      </Text>
    </Box>
  );
};

export default Loadingpage;
