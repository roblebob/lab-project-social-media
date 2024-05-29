import {
  Avatar,
  AvatarBadge,
  Flex,
  Image,
  Stack,
  Text,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { BsCheck2All } from "react-icons/bs";
import { selectedConversation } from "../atoms/messagesAtom";

const Conversation = ({ conversation }) => {
  const currentUser = useRecoilValue(userAtom);
  const user = conversation.participants[0];
  const lastMessage = conversation.lastMessage;
  const [selecteConversation, setSelectedConversation] = useRecoilState(selectedConversation);
  const colorMode = useColorModeValue();

  console.log("selectedConversation: ", selecteConversation);
  return (
    <Flex
      gap={4}
      alignItems={"center"}
      p={1}
      _hover={{
        cursor: "pointer",
        bg: useColorModeValue("gray.600", "gray.dark"),
        color: "white",
      }}
      onClick={() => setSelectedConversation({
        _id: conversation._id,
        userId: user._id,
        username: user.username,
        userProfilePic: user.profilePic,
      })}
      bg={selecteConversation._id === conversation._id ? (colorMode === "light" ? "gray.400" :"gray.dark"): ""}
      borderRadius={"md"}
    >
      <WrapItem>
        <Avatar
          size={{ base: "xs", sm: "sm", md: "md" }}
          src={user.profilePic}
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
      </WrapItem>
      <Stack direction="column" fontSize={"sm"}>
        <Text fontWeight={"700"} display={"flex"} alignItems={"center"}>
          {user.username}
          <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
        <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}>
          {currentUser._id === lastMessage.sender ? <BsCheck2All size={16}/> : ""}
          {lastMessage.text.length > 18 ? lastMessage.text.slice(0, 18) + "..." : lastMessage.text}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Conversation;
