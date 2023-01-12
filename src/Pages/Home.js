import React from "react";

import {
  Text,
  Box,
  Image,
  Stack,
  Button,
  Flex,
  HStack,
  Center,
} from "@chakra-ui/react";

// </Stack>m={35} paddingRight={"5rem"}>

function HomePage() {
  return (
    <div>
      <Center padding={"3rem"}>
        <HStack>
          <Stack padding={"1rem"}>
            <Text align={"left"} fontSize="3xl" fontWeight={"bold"}>
              Bringing water <br />
              advice to all farmers.
            </Text>
            <br />
            <Text align={"left"}>
              Liquid Prep is an open-source project that originates <br />
              from the winning team's idea of the Internal IBM Call for <br />
              Code challenge in 2019. Our team is dedicated to <br />
              helping farmers in developing countries making the <br />
              right decisions regarding watering their crops.
              <br />
            </Text>
            <Button
              borderRadius={"100px"}
              background={"#fffffff"}
              borderColor={"black"}
              padding={"1rem"}
              variant={"outline"}
              width={"10rem"}
            >
              Get Involved
            </Button>
          </Stack>
          <Image src={require("../assets/logo.png")} />
        </HStack>
      </Center>
      <Center>
        <Stack mt={"20rem"} ml={"10rem"}>
          <Text align={"left"} fontSize="3xl" fontWeight={"bold"}>
            About Liquid Prep
          </Text>
          <HStack>
            <Text mt={10} align={"left"}>
              Our idea is to provide a very easy-to-use mobile application to{" "}
              <br />
              provide watering advice to farmers. The solution uses a <br />
              combination of diverse data of weather forecasts, crop <br />
              information, and on-the-spot soil humidity measurements to <br />
              generate watering advice. The advice is easily accessed on any{" "}
              <br />
              mobile device that are used so frequently over the world. <br />
              <br />
              <br />
              Winning the Call for Code was the start of our adventure. We never{" "}
              <br />
              expected to win, but once we did we were inspired to help the{" "}
              <br />
              farmers in the world cope with the changing climate. Extreme{" "}
              <br />
              weather conditions makes it difficult for farmers to assess the{" "}
              <br />
              right amount of water required for their crops. With our solution{" "}
              <br />
              we help them manage their watering decisions. <br />
            </Text>
            <Box>
              <Text align={"left"} ml={20}>
                Participation is welcomed from software developers, designers,{" "}
                <br />
                testers, agronomists/agri experts/soil experts, IoT engineers,{" "}
                <br />
                researchers, students, farmers, and others that can help improve{" "}
                <br />
                the quality and value of the solution for small farmers around
                the <br />
                world. Key areas the team are interested in developing include{" "}
                <br />
                localizing the mobile app, considering soil properties for the{" "}
                <br />
                improvement of the watering advice, updating project <br />
                documentation, software and hardware testing, more in-depth{" "}
                <br />
                research, and adding more crop data to the database <br />
                <br />
                <br />
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Center>
      <Image
        src={require("../assets/homepage-background.png")}
        style={{
          position: "relative",
          width: "100vw",
          maxWidth: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      />
    </div>
  );
}

export default HomePage;
