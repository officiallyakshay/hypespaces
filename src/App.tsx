import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Rooms from "./Rooms";
import Profile from "./Profile";
import Nav from "./Nav";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex flexDir="column">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Flex mt="auto">
        <Nav />
      </Flex>
    </Flex>
  );
}

export default App;
