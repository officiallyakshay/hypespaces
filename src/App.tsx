import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Rooms from "./Rooms";
import Profile from "./Profile";
import { Divider, Flex } from "@chakra-ui/react";
import { TopLeftLogo } from "./TopLeftLogo";

function App() {
  return (
    <Flex flexDir="column" padding="4" height="100vh">
      <TopLeftLogo />
      <Divider mb="5" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:room" element={<Rooms />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Nav />
    </Flex>
  );
}

export default App;
