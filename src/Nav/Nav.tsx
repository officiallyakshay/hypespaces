import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { PiUserFill, PiUserLight } from "react-icons/pi";

export const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const onHome = path === "/";
  const onProfile = path === "/profile";

  return (
    <Box mt="auto">
      <Divider />
      <Flex justify="space-between" mt="2">
        <ChakraLink as={ReactRouterLink} to="/">
          <Button variant="none">
            {onHome ? (
              <HiHome fontSize="1.5rem" color="white" />
            ) : (
              <HiOutlineHome fontSize="1.5rem" color="white" />
            )}
          </Button>
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/profile">
          <Button variant="none">
            {onProfile ? (
              <PiUserFill fontSize="1.5rem" color="white" />
            ) : (
              <PiUserLight fontSize="1.5rem" color="white" />
            )}
          </Button>
        </ChakraLink>
      </Flex>
    </Box>
  );
};
