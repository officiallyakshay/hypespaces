import { ChangeEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export const Rooms = () => {
  const { room } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue.trim()]);
      setInputValue(""); // Clear the input field
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Flex flexDir="column" mb="4" height="100vh">
      <Flex align="center">
        <IoIosArrowBack
          fontSize="1.5rem"
          color="white"
          onClick={handleBackClick}
        />
        <Text color="white" fontSize="lg">
          {`Room: ${room}`}
        </Text>
      </Flex>

      <Flex flexDir="column" flexGrow={1} overflowY="auto" mt="4">
        {messages.map((message, index) => (
          <Text key={index} color="white" mb="2">
            {message}
          </Text>
        ))}
      </Flex>

      <Flex mt="auto">
        <Input
          color="white"
          placeholder="Send a message!"
          onChange={handleInputChange}
        />
        <Button ml="2" onClick={handleSendClick}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};
