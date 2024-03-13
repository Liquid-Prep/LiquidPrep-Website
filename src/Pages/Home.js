import React from "react";

import {
  Text,
  Box,
  Image,
  Stack,
  Button,
  HStack,
  Center,
  Card,
  CardBody,
  Heading,
  Link,
} from "@chakra-ui/react";

import { FaGithub, FaTwitter, FaSlack } from "react-icons/fa";
function HomePage() {
  return (
    <div>
      <Center padding={"3rem"}>
        <HStack>
          <Stack padding={"1rem"}>
            <Box maxW={"sm"}>
              <Text align={"left"} fontSize="3xl" fontWeight={"bold"}>
                Bringing watering <br />
                advice to all farmers.
              </Text>
              <br />
              <Text align={"left"}>
                Liquid Prep is an open-source project that originates from the winning 
                idea of the internal IBM Call for Code challenge in 2019. Our team is 
                dedicated to bringing the solution to life by helping farmers in developing 
                countries make the right decisions regarding watering their crops.
                <br />
              </Text>
            </Box>
            <Button
                borderRadius={"100px"}
                background={"#fffffff"}
                borderColor={"black"}
                padding={"1rem"}
                variant={"outline"}
                width={"10rem"}
              >
                <Link href="https://github.com/Liquid-Prep/Liquid-Prep">
                  Get Involved
                </Link>
            </Button>
          </Stack>
          <Image src={require("../assets/logo.png")} />
        </HStack>
      </Center>
      <Center>
        <Stack mt={"2rem"} ml={"10rem"}>
          <Text align={"left"} fontSize="3xl" fontWeight={"bold"}>
            About Liquid Prep
          </Text>
          <HStack>
            <Box>
              <Text align={"left"} maxW='75%' mt={10}  >
                Our goal is to provide farmers with accessible crop watering advice. 
                The solution uses a combination of diverse data sources including local 
                weather forecasts, crop specific information, and on-the-spot soil 
                humidity measurements to provide farmers with easy to interpret crop 
                watering advice. The advice is easily accessed on any mobile device 
                that are used so frequently around the world today. 
                <br />
                <br />
                Winning the Call for Code competition was the start of our adventure. 
                We never expected to win. But the amazing support and enthusiasm 
                surrounding our work inspired us to push for a real change. Small 
                farmers all around the world are struggling with changing climate 
                conditions and increased extreme weather events. Most farmers don’t 
                have the means for advanced farming/watering solutions. It’s becoming 
                more difficult to successfully manage a farm and its crops - especially 
                with a limited water supply. We plan to change that.
              </Text>
            </Box>
            <Box>
              <Text align={"left"} maxW='75%' >
                Participation is welcomed from software developers, designers, testers, 
                agronomists/agri experts/soil experts, IoT engineers, researchers, students, 
                farmers, and others that can help bring our solution to life. Key areas 
                our team is working in include: developing the mobile app, building soil 
                moisture IoT sensors, creating a detailed database of crop specific information, 
                and the building of our watering advice algorithm (using both traditional and AI 
                approaches). All areas have room for new participants!
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Center>
      <Image
        src={require("../assets/homepage-background.png")}
        style={{
          position: "relative",
          width: "99.4vw",
          maxWidth: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
        mt={"2rem"}
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
                Latest technologies
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
              <Link href={"/blog"}>
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
              paddingRight="20rem"
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
      <Center backgroundColor="white" paddingBottom={"10rem"}>
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
              Get Involved
            </Text>
            <Stack direction={"row"} paddingTop={"3rem"}>
              <Box maxW={"sm"} textAlign="left">
                <Stack>
                  <Text color="#555555" size={"1rem"}>
                    JOIN THE PROJECT
                  </Text>
                  <Text paddingTop={"1rem"}>
                    Liquid Prep is an open source project and always welcomes
                    new contributors to the project. Please reach out to us if you
                    are interested in getting involved with the project or would
                    like to know more!
                  </Text>
                </Stack>
              </Box>
              <Box maxW={"sm"} textAlign="left" paddingLeft={"2rem"}>
                <Stack>
                  <Text color="#555555" size={"1rem"}>
                    WORK WITH US
                  </Text>
                  <Text paddingTop="1rem">
                    Email:{" "}
                    <Link
                      href="mailto:info.liquidprep@gmail.com"
                      color={"#4a8cb7"}
                    >
                      info.liquidprep@gmail.com
                    </Link>
                  </Text>
                  <Text paddingTop={"1rem"}>
                    Join our weekly public meeting on every Thursday at 4:30 pm
                    ET on{" "}
                    <Link
                      color={"#4a8cb7"}
                      href={
                        "https://us05web.zoom.us/j/9124577210?pwd=NDFUV1EvdGFLZWpQb3ZYcm10ZEpxdz09"
                      }
                    >
                      Zoom
                    </Link>
                  </Text>
                </Stack>
              </Box>
              <Box>
                <Text textAlign={"left"}>FOLLOW OUR PROGRESS</Text>
                <HStack>
                  <Stack paddingTop={"1rem"} direction={"row"}>
                    <FaSlack size={"1.3rem"} />
                    <Link href={"https://callforcode.org/slack"}>
                      callforcode.org/slack
                    </Link>
                    <br />
                    <Text textAlign={"left"}>channel: #liquid-prep</Text>
                  </Stack>
                </HStack>
                <Stack direction="row" paddingTop="1rem">
                  <FaGithub />
                  <Link href="https://github.com/Liquid-Prep/Liquid-Prep">
                    Liquid-Prep/Liquid-Prep
                  </Link>
                </Stack>
                <Stack direction="row" paddingTop="1rem">
                  <FaTwitter />
                  <Link marginBottom="10px" href="https://twitter.com/PrepLiquid">PrepLiquid</Link>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </HStack>
      </Center>
    </div>
  );
}

export default HomePage;