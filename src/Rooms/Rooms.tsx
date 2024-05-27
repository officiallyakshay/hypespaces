import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export const Rooms = () => {
  const { room } = useParams();
  return (
    <Flex>
      <Text color="white">{room}</Text>
    </Flex>
  );
};
