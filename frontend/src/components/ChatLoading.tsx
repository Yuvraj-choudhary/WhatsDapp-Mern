import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <Stack paddingInline="15px">
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
      <Skeleton height="45px" borderRadius="xl" boxShadow="inner" className="drop-shadow-lg" />
    </Stack>
  );
};

export default ChatLoading;
