import { Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import { useState } from "react";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  const [loading, setLoading] = useState(false);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  return (
    <>
      <Text mb={4} fontWeight={"bold"}>
        Suggested Users
      </Text>
      <Flex direction={"column"} gap={4}>
        {!loading &&
          Array(5).fill(0).map((user) => (
            <SuggestedUser key={user._id} user={user} />
          ))}

        {loading &&
          Array(5)
            .fill(0)
            .map((_, i) => (
              <Flex
                key={i}
                gap={2}
                alignItems={"center"}
                p={1}
                borderRadius={"md"}
              >
                {/* avatar skeleton */}
                <Box>
                  <SkeletonCircle size={10} />
                </Box>

                {/* username, fullname skeleton */}
                <Flex w={"full"} flexDirection={"column"} gap={2}>
                  <Skeleton h={"8px"} w={"80px"} />
                  <Skeleton h={"8px"} w={"90px"} />
                </Flex>

                {/* follow button skeleton */}
                <Flex>
                  <Skeleton h={"20px"} w={"60px"} />
                </Flex>
              </Flex>
            ))}
      </Flex>
    </>
  );
};

export default SuggestedUsers;

 