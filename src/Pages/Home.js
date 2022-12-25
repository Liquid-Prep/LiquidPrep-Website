import React from "react";

import { Text, Box, Image, Stack } from "@chakra-ui/react";
import "../common/images/logo.png"

function HomePage() {
    return (
        <div>
            <Stack direction="row">
                <Box align="left" m={35}>
                    <Text fontSize='3xl'>
                        Bringing water <br />
                        advice to all farmers.
                    </Text>
                    <br />
                    <Text>
                        Liquid Prep is an open-source project that originates <br />
                        from the winning team's idea of the Internal IBM Call for <br />
                        Code challenge in 2019. Our team is dedicated to <br />
                        helping farmers in developing countries making the <br />
                        right decisions regarding watering their crops.<br />
                    </Text>
                </Box>
                <Image 
                    src={require("../common/images/logo.png")}
                />
            </Stack>

        </div>
    )
}

export default HomePage;