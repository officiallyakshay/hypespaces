import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const user = {
  name: "Akshay Prabhakar",
  bio: "Lover of the creator economy and oat milk lattes. Founder, Software Engineer @ Partnr",
  member_of_rooms: ["fitness", "lifestyle"],
};

const all_rooms = ["lifestyle", "fitness", "cooking", "trends", "traveling"];

export const Profile = () => {
  const [editing, setEditing] = useState(false);

  const editProfile = () => {
    !editing ? setEditing(true) : setEditing(false);
  };

  return (
    <Box>
      <Flex mb="6" justify="space-between">
        <Text color="white">My Profile</Text>
        <Text color="white" onClick={editProfile}>
          {editing ? "Save Profile" : "Edit Profile"}
        </Text>
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Name</FormLabel>
        {editing ? (
          <Input placeholder="Add Your Name" value={user.name} color="white" />
        ) : (
          <Text color="white">{user.name}</Text>
        )}
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Bio</FormLabel>
        {editing ? (
          <Textarea placeholder="Add Your Bio" value={user.bio} color="white" />
        ) : (
          <Text color="white">{user.bio}</Text>
        )}
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Member of these rooms:</FormLabel>
        {editing
          ? all_rooms.map((room) => (
              <Checkbox
                key={room}
                isChecked={user.member_of_rooms.includes(room)}
              >
                <Text color="white">{room}</Text>
              </Checkbox>
            ))
          : user.member_of_rooms.map((member) => (
              <Text color="white">{member}</Text>
            ))}
      </Flex>
    </Box>
  );
};
