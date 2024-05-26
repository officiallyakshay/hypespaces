import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Avatar, Button, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

export const Nav = () => {
  return (
    <Flex>
      <ChakraLink as={ReactRouterLink} to="/">
        <Button variant="outline" fontFamily="monospace">
          Hype Spaces
        </Button>
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/rooms">
        <Button variant="outline">Rooms</Button>
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/profile">
        <Button variant="outline">
          <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
        </Button>
      </ChakraLink>
    </Flex>
  );
};
