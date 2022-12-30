import React from "react";

import { Text, Box, Image, Stack, Button, Flex, HStack, Center } from "@chakra-ui/react"

// </Stack>m={35} paddingRight={"5rem"}>

function HomePage() {
  return (
    <div>
      <Center padding={"3rem"}>
        <HStack>
          <Stack padding={"2rem"}>
            <Text align={"left"} fontSize="3xl">
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
          </Stack>
          <Image src={require("../assets/logo.png")} />
        </HStack>
      </Center>
    </div>
  );
}

export default HomePage;


{/* <Button
              borderRadius={"100px"}
              background={"#fffffff"}
              borderColor={"black"}
              padding={"1rem"}
              variant={"outline"}
            >
              Get Involved
            </Button> */}
