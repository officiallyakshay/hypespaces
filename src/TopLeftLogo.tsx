import { Link as ReactRouterLink } from "react-router-dom";
import { Button, Link as ChakraLink, Text } from "@chakra-ui/react";

export const TopLeftLogo = () => {
  return (
    <ChakraLink as={ReactRouterLink} to="/">
      <Button variant="none" padding="0" mb="2">
        <Text color="white" fontFamily="monospace">
          Hype Spaces
        </Text>
      </Button>
    </ChakraLink>
  );
};
