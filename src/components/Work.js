
import React from 'react'
import { Container,Box,Heading,Stack,Avatar,Text,Divider } from "@chakra-ui/react";


function Work() {
    return (
        <Container p="5">
            <Box padding="4"  boxShadow="2xl" p="6" rounded="3xl">
                <Text fontSize="3xl" padding="4"><strong> 💼 Experience </strong></Text>
                <Stack spacing={8}>
                <Box p={5} rounded="xl" shadow="xl" borderWidth="1px">
                    <Heading fontSize="xl" align="left">Imgur</Heading>
                    <Text mt={4} align="left"><strong>Full Stack Engineer</strong></Text>
                    <Text mt={2} align="left">Working in development of microservices and 
                    new features as a part of the platform engineering team using Go and React.</Text>
                </Box>
                <Box p={5} rounded="xl" shadow="xl" borderWidth="1px">
                    <Heading fontSize="xl" align="left">Acceletrade</Heading>
                    <Text mt={4} align="left"><strong>Member Technical Staff (High Frequency Trading)</strong> </Text>
                    <Text mt={2} align="left">Worked towards development and optimization of trading algorithms. 
                    Part of the pilot project involving use of distributed system using Apache Kafka and Pub/Sub messaging. </Text>
                </Box>
                <Box p={5} rounded="xl" shadow="xl" borderWidth="1px">
                    <Heading fontSize="xl" align="left">HealthKart</Heading>
                    <Text mt={4}  align="left"><strong>SDE Intern</strong></Text>
                    <Text mt={2} align="left">Created a successful POC using Deep Learning to perform Image Classification and Object 
                    Detection in real time. </Text>
                </Box>
                </Stack>
            </Box>
      </Container> 
    )
}

export default Work;
