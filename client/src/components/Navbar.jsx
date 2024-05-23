import { Flex, Image, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb={12}>
      <Image
        curser={"pointer"}
        alt="logo"
        w={6}
        src={colorMode === "light" ? "/dark-logo.svg" : "/light-logo.svg"}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Navbar;