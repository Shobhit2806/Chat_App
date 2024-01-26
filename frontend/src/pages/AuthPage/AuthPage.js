import React from "react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import styles from "./Auth.module.css";
import TabComponent from "./TabComponent";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
const AuthPage = () => {
  const gradientBackground = {
    backgroundImage:
      'radial-gradient(circle at 50% 100%, #1f1f1f 4%, #0c0c0c 58%), url("https://assets-global.website-files.com/6528b49e7f97d75a75fdfbaa/6528b49f7f97d75a75fdfc3e_Noise.png")',
  };

  return (
    <div className={styles.auth_page}>
      <Container
        bg="#575C68"
        w="lg"
        h="100%"
        borderRadius=".7em .7em 0px .7em"
        borderWidth="1px"
        borderColor={"rgba(117, 117, 117, .4)"}
        centerContent
        style={gradientBackground}
      >
        <Box d="flex" justifyContent="center" p={5} w="100%" color="white">
          {/* <Text fontSize={"12px"}>Hello</Text> */}
          <TabComponent FirstTab = {<Login/>} SecondTab={<SignUp/>}/>
        </Box>
      </Container>
    </div>
  );
};

export default AuthPage;
