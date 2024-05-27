import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const rooms = [
  { topic: "lifestyle", numberOfMembers: 5, currentlyActive: 1 },
  { topic: "fitness", numberOfMembers: 4, currentlyActive: 2 },
  { topic: "cooking", numberOfMembers: 10, currentlyActive: 8 },
  { topic: "trends", numberOfMembers: 50, currentlyActive: 15 },
  { topic: "traveling", numberOfMembers: 25, currentlyActive: 11 },
];

export const Home = () => {
  return (
    <>
      {rooms.map((room, i) => (
        <Link as={ReactRouterLink} to={`${room.topic}`}>
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
              <Text color="white">
                Currently Active: {room.currentlyActive}
              </Text>
            </Flex>
          </Flex>
        </Link>
      ))}
    </>
  );
};
