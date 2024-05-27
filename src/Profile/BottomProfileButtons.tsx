import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

export const BottomProfileButtons = () => {
  return (
    <Flex flexDir="column" mb="8">
      <Button variant="outline" color="white">
        <Text>Sign Out</Text>
      </Button>
      <Button bg="red.500" color="white" mt="5">
        {/* <PiWarning fontSize="1.5rem" color="white" /> */}
        <Text>Delete Account</Text>
      </Button>
    </Flex>
  );
};
