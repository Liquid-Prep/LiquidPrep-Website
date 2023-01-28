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
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Heading,
  Link,
} from "@chakra-ui/react";

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
      <Center backgroundColor="white">
        <Stack
          direction={"column"}
          paddingTop={"5rem"}
          backgroundColor="white"
          // ml={"10rem"}
        >
          <Text align={"left"} fontSize="3xl" fontWeight={"bold"}>
            Our Mission
          </Text>
          <Stack direction={"row"} paddingTop={"3rem"}>
            <Box maxW={"sm"}>
              <Image
                src={require("../assets/small-lavender-field.png")}
                // maxW={{ base: "90%" }}
                objectFit="fill"
              ></Image>
              <Text align={"left"} paddingTop="1rem" fontSize={"1.5rem"}>
                Supporing small-scale farmers
              </Text>
            </Box>
            <Box maxW={"sm"}>
              <Image
                // maxW={{ base: "99%" }}
                src={require("../assets/accessibility-image.jpg")}
                objectFit="fill"
              ></Image>
              <Text align={"left"} paddingTop="1rem" fontSize={"1.5rem"}>
                Accessible to everyone
              </Text>
            </Box>
            <Box maxW={"sm"}>
              <Image
                // maxW={{ base: "90%" }}
                src={require("../assets/irrigation.jpg")}
                // Image used under CC by 3.0. Credit to Willem van Aken (Photo Taken November 8 1995)
                scale="20%"
                objectFit="fill"
              ></Image>
              <Text align={"left"} paddingTop="1rem" fontSize={"1.5rem"}>
                Latest Technologies
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Center>
      <Center backgroundColor="white">
        <HStack>
          <Stack
            direction={"column"}
            paddingTop={"5rem"}
            backgroundColor="white"
            // ml={"10rem"}
          >
            <Text
              align={"left"}
              fontSize="3xl"
              fontWeight={"bold"}
              paddingRight="10rem"
            >
              Our Blog
            </Text>
            <Stack direction={"row"} paddingTop={"3rem"}>
              <Card maxW={"sm"}>
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt={6} textAlign={"left"}>
                    <Heading size={"md"}>Blog Post Heading</Heading>
                    <Text>
                      Quo esse est voluptate maxime amet. Quia quisquam at
                      repudiandae laboriosam. Et voluptas recusandae ratione
                      natus nisi assumenda et.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
              <Card maxW={"sm"}>
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt={6} textAlign={"left"}>
                    <Heading size={"md"}>Blog Post Heading</Heading>
                    <Text>
                      Quo esse est voluptate maxime amet. Quia quisquam at
                      repudiandae laboriosam. Et voluptas recusandae ratione
                      natus nisi assumenda et.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
              <Card maxW={"sm"}>
                <CardBody>
                  <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt={6} textAlign={"left"}>
                    <Heading size={"md"}>Blog Post Heading</Heading>
                    <Text>
                      Quo esse est voluptate maxime amet. Quia quisquam at
                      repudiandae laboriosam. Et voluptas recusandae ratione
                      natus nisi assumenda et.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Stack>
            <Center paddingTop={"3rem"}>
              <Link href={"/blogs"}>
                <Button
                  borderRadius={10}
                  backgroundColor="#4F83AE"
                  textColor={"white"}
                >
                  All Blog Posts
                </Button>
              </Link>
            </Center>
          </Stack>
        </HStack>
      </Center>
      <Center backgroundColor="white">
        <HStack>
          <Stack
            direction={"column"}
            paddingTop={"5rem"}
            backgroundColor="white"
            // ml={"10rem"}
          >
            <Text
              align={"left"}
              fontSize="3xl"
              fontWeight={"bold"}
              paddingRight="10rem"
            >
              Our Partners
            </Text>
            <Stack direction={"row"} paddingTop={"3rem"}>
              <Box maxW={"sm"}>
                <Image
                  src={require("../assets/call-for-code.png")}
                  // maxW={{ base: "110%" }}
                  objectFit="fill"
                ></Image>
              </Box>
              <Box maxW={"sm"}>
                <Image
                  // maxW={{ base: "99%" }}
                  src={require("../assets/Linux_Foundation_logo.png")}
                  objectFit="fill"
                ></Image>
              </Box>
            </Stack>
          </Stack>
        </HStack>
      </Center>
    </div>
  );
}

export default HomePage;
