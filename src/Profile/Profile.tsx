import { useEffect, useState, ChangeEvent } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Spinner,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { BottomProfileButtons } from "./BottomProfileButtons";

const fetchUserProfile = () => {
  return {
    name: "Akshay Prabhakar",
    bio: "Lover of the creator economy and oat milk lattes. Founder, Software Engineer @ Partnr",
    member_of_rooms: ["fitness", "lifestyle"],
  };
};

const all_rooms = ["lifestyle", "fitness", "cooking", "trends", "traveling"];

export interface UserData {
  name: string;
  bio: string;
  member_of_rooms: string[];
}

export const Profile = () => {
  const [userProfile, setUserProfile] = useState<UserData | null>(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [memberOfRooms, setMemberOfRooms] = useState<string[]>([]);
  const toast = useToast();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserProfile();
      setUserProfile(userData);
      setName(userData.name);
      setBio(userData.bio);
      setMemberOfRooms(userData.member_of_rooms);
    };

    getUserData();
  }, []);

  const toggleEditProfile = () => {
    setEditing(!editing);
  };

  const saveProfile = () => {
    if (editing) {
      if (
        name !== userProfile?.name ||
        bio !== userProfile?.bio ||
        JSON.stringify(memberOfRooms) !==
          JSON.stringify(userProfile?.member_of_rooms)
      ) {
        const updatedProfile = {
          name,
          bio,
          member_of_rooms: memberOfRooms,
        };
        toast({
          title: "Profile Saved",
          status: "success",
          isClosable: true,
          duration: 1000,
        });
        setUserProfile(updatedProfile);
        console.log("userProfile in change", userProfile);
      }
    }
    setEditing(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  const handleRoomChange = (room: string) => {
    if (memberOfRooms.includes(room)) {
      setMemberOfRooms(memberOfRooms.filter((r) => r !== room));
    } else {
      setMemberOfRooms([...memberOfRooms, room]);
    }
  };

  if (!userProfile) {
    return (
      <Flex>
        <Text color="white">Loading</Text>
        <Spinner color="white" ml="2" />
      </Flex>
    );
  }

  return (
    <Box>
      <Flex mb="6" justify="space-between">
        <Text color="white" alignContent="center">
          My Profile
        </Text>
        {!editing ? (
          <Button
            variant={editing ? "solid" : "outline"}
            color="white"
            size="sm"
            onClick={editing ? saveProfile : toggleEditProfile}
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
            onChange={(e) => handleNameChange(e)}
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
            onChange={(e) => handleBioChange(e)}
          />
        ) : (
          <Text color="white">{bio}</Text>
        )}
      </Flex>

      <Flex flexDir="column" mb="8">
        <FormLabel color="white">Member of these rooms:</FormLabel>
        {memberOfRooms.length === 0 && !editing ? (
          <Text color="white">
            You're not a part of any room! Let's change that. Join a room by
            clicking the edit profile button at the top right!
          </Text>
        ) : editing ? (
          all_rooms.map((room) => (
            <Checkbox
              key={room}
              isChecked={memberOfRooms.includes(room)}
              onChange={() => handleRoomChange(room)}
            >
              <Text color="white">{room}</Text>
            </Checkbox>
          ))
        ) : (
          memberOfRooms.map((member) => (
            <Text key={member} color="white">
              {member}
            </Text>
          ))
        )}
      </Flex>

      {editing ? <BottomProfileButtons /> : null}
    </Box>
  );
};
