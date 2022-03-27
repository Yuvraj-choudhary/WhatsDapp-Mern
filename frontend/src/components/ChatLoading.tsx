import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <Stack>
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
      <Skeleton height="45px" borderRadius="xl" />
    </Stack>
  );
};

export default ChatLoading;
