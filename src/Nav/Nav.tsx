import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { BiHome } from "react-icons/bi";

export const Nav = () => {
  return (
    <>
      <Divider />
      <Flex justify="space-between">
        <ChakraLink as={ReactRouterLink} to="/">
          <Button variant="none">
            <BiHome fontSize="1.5rem" color="white" />
          </Button>
        </ChakraLink>
        {/* <ChakraLink as={ReactRouterLink} to="/rooms">
        <Button variant="none" fontFamily="monospace">
          Rooms
        </Button>
      </ChakraLink> */}
        <ChakraLink as={ReactRouterLink} to="/profile">
          <Button variant="none">
            <AiOutlineUser fontSize="1.5rem" color="white" />
          </Button>
        </ChakraLink>
      </Flex>
    </>
  );
};
