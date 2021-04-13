import React from 'react'
import { Container,Box,Image,Center,Text,Divider,UnorderedList,ListItem, Link } from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram,faGithub,faLinkedin,faTwitter,faDev} from "@fortawesome/free-brands-svg-icons"
function About() {
    return (
        <Container p="5">
            <Box padding="4" boxShadow="2xl" p="6" rounded="3xl">
                <Center>
                <Image
                    borderRadius="full"
                    boxSize="250px"
                    src="https://avatars.githubusercontent.com/u/36269838?s=460&u=203bb1ccbc98b45ab8177622a72f57c60a12a030&v=4"
                    alt="Ankit Sridhar"
                    />
                </Center>
                <Text fontSize="3xl" padding="4"><strong>About me 👋</strong></Text>
                <Text p="2" fontSize="xl">
                Engineer who likes to program full stack apps for the modern web 
                </Text>
                <UnorderedList>
                <ListItem p="2" fontSize="large" align="left">Full Stack Engineer @ <Link href="https://imgur.com">Imgur Inc</Link></ListItem>
                <ListItem p="2" fontSize="large" align="left">Worked in the development of Low latency & distributed systems in the domain of Algorithmic and High Frequency Trading</ListItem>
                <ListItem p="2" fontSize="large" align="left">Developed & built POC's leveraging Deep Learning for Image Classification & Object Detection tasks</ListItem>
                </UnorderedList>
                <Divider />
                <Text fontSize="2xl" padding="2">
                Let's talk 
                </Text>
                <a href=""><FontAwesomeIcon icon={faInstagram}/> <t></t> </a>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t> </a>
                <a href="https://www.linkedin.com/in/ankitsridhar/"><FontAwesomeIcon icon={faLinkedin} />  <t></t> </a>
                <a href=""><FontAwesomeIcon icon={faTwitter}/>  <t></t> </a>
                <a href=""><FontAwesomeIcon icon={faDev}/> <t></t> </a>
                
            </Box>
      </Container> 
    )
}

export default About;
