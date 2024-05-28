import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { BottomProfileButtons } from "./BottomProfileButtons";

const user = {
  name: "Akshay Prabhakar",
  bio: "Lover of the creator economy and oat milk lattes. Founder, Software Engineer @ Partnr",
  member_of_rooms: ["fitness", "lifestyle"],
};

const all_rooms = ["lifestyle", "fitness", "cooking", "trends", "traveling"];

export const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [memberOfRooms, setMemberOfRooms] = useState([]);

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
    // setMemberOfRooms(user.member_of_rooms);
  }, [name, bio, memberOfRooms]);

  const editProfile = () => {
    !editing ? setEditing(true) : setEditing(false);
  };

  const saveProfile = () => {
    if (editing) {
      setName(name);
      setEditing(true);
    }
    setEditing(false);
  };

  const editName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const editBio = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <Box>
      <Flex mb="6" justify="space-between">
        <Text color="white" alignContent="center">
          My Profile
        </Text>
        {!editing ? (
          <Button
            variant="outline"
            color="white"
            size="sm"
            onClick={editProfile}
          >
            Edit Profile
          </Button>
        ) : (
          <Button size="sm" onClick={saveProfile}>
            Save Profile
          </Button>
        )}
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Name</FormLabel>
        {editing ? (
          <Input
            placeholder="Add Your Name"
            defaultValue={name}
            color="white"
            onChange={(e) => editName(e)}
          />
        ) : (
          <Text color="white">{name}</Text>
        )}
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Bio</FormLabel>
        {editing ? (
          <Textarea
            placeholder="Add Your Bio"
            value={bio}
            color="white"
            onChange={(e) => editBio(e)}
          />
        ) : (
          <Text color="white">{bio}</Text>
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
              <Text color="white" key={member}>
                {member}
              </Text>
            ))}
      </Flex>

      {editing ? <BottomProfileButtons /> : null}
    </Box>
  );
};
