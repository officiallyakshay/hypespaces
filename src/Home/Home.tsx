import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

const rooms = [
  { topic: "lifestyle", numberOfMembers: 5, currentlyActive: 1 },
  { topic: "fitness", numberOfMembers: 4, currentlyActive: 2 },
  { topic: "cooking", numberOfMembers: 10, currentlyActive: 8 },
  // { topic: "lifestyle", numberOfMembers: 5, currentlyActive: 1 },
  // { topic: "lifestyle", numberOfMembers: 5, currentlyActive: 1 },
];

export const Home = () => {
  return (
    <>
      {rooms.map((room, i) => (
        <Flex
          padding="2"
          border="1px solid grey"
          mb="5"
          borderRadius="5"
          flexDir="column"
          onClick={() => console.log("room.topic", room.topic)}
          key={i}
        >
          <Text color="white">Topic: {room.topic}</Text>
          <Flex justify="space-between" mt="5">
            <Text color="white">Num of Members: {room.numberOfMembers}</Text>
            <Text color="white">Currently Active: {room.currentlyActive}</Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
};
