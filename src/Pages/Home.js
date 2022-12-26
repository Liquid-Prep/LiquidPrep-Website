import React from "react";

import { Text, Box, Image, Stack, Button } from "@chakra-ui/react";

function HomePage() {
  return (
    <div>
      <Stack direction="row" align="center" paddingLeft={"6rem"}>
        <Box align="left" m={35} paddingRight={"5rem"}>
          <Text fontSize="3xl" align={"left"}>
            Bringing water <br />
            advice to all farmers.
          </Text>
          <br />
          <Text align={"left"} paddingBottom={"1rem"}>
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
          >
            Get Involved
          </Button>
        </Box>
        <Image src={require("../assets/logo.png")} />
      </Stack>
    </div>
  );
}

export default HomePage;
