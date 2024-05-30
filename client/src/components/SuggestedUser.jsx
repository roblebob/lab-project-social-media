import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user }) => {
  const following = true;
  const updating = false;

  return (
    <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
      {/* // left side */}
      <Flex gap={2} as={Link} to={`${user.username}`}>
        <Avatar src="" />
        <Box>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Someone
          </Text>
          <Text color={"gray.light"} fontSize={"sm"}>
            some One
          </Text>
        </Box>
      </Flex>

      {/* // right side */}
      <Button
        size={"sm"}
        color={following ? "black" : "white"}
        bg={following ? "white" : "blue.400"}
        // onClick={handleFollow}
        isLoading={updating}
        _hover={{
          color: following ? "black" : "white",
          opacity: ".8",
        }}
      >
        {following ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
