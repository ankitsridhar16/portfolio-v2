
import React from 'react'
import { Container,Box,Flex,Text,Divider,SimpleGrid,Tag,Button, Heading } from "@chakra-ui/react";
import DevIcon from "devicon-react-svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faLink} from "@fortawesome/free-solid-svg-icons"

function Skills() {
    const devIconStyle = {
        width: "50px",
    };

    return (
        <Container p="5">
            <Box padding="4" boxShadow="2xl" p="6" rounded="3xl">
                <Text fontSize="3xl" padding="4"><strong> 🛠 Skills & Projects  </strong></Text>
                <Text >
                    Languages & Technologies
                </Text>
                <Divider/>
                <Flex>
                <DevIcon icon="html5" style={devIconStyle}/>
                <DevIcon icon="css3" style={devIconStyle}/>
                <DevIcon icon="react" style={devIconStyle}/>
                <DevIcon icon="python" style={devIconStyle}/>
                <DevIcon icon="go" style={devIconStyle}/>
                <DevIcon icon="javascript" style={devIconStyle}/>
                <DevIcon icon="java" style={devIconStyle}/>
                <DevIcon icon="django" style={devIconStyle}/>
                <DevIcon icon="mysql" style={devIconStyle}/>
                <DevIcon icon="git" style={devIconStyle}/>
                <DevIcon icon="linux" style={devIconStyle}/>
                </Flex>
                <Text fontSize="2xl" padding="4"><strong> Projects </strong></Text>
                <SimpleGrid columns={2} spacing={10}>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> Kromatic </strong></Text>
                    <Tag>Python</Tag>
                    <Tag>Flask</Tag>
                    <Tag>Deeo Learning</Tag>
                    <Text fontSize="sm">
                    A Flask(Python) based web app which helps transform images from B/W -> Colored, Low-Res->Hi-Res and even create Hallucinogenic patterns using Deepdream. 
                    </Text>
                    <a href="https://github.com/ankitsridhar16/Kromatic"><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                    <a href="https://kromatic.herokuapp.com"><FontAwesomeIcon icon={faLink}/></a>
                    </Box>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> Scrap-Ec</strong></Text>
                    <Tag>Python</Tag>
                    <Text fontSize="sm">
                    Scrap-Ec is a web spider/crawler crawling E-commerce platforms by providing a CLI (Command Line Interface) 
                    </Text>
                    <a href="https://github.com/ankitsridhar16/Web-Crawler-Shop"><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                    <a href="https://github.com/ankitsridhar16/Web-Crawler-Shop"><FontAwesomeIcon icon={faLink}/></a>
                    </Box>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> Beaute </strong></Text>
                    <Tag>Python</Tag>
                    <Tag>Telegram Bot</Tag>
                    <Text fontSize="sm">Beaute is a Telegram messenger bot .The bot uses Pexel's image REST API for sending request and receiving a response. Server hooks in Flask and hosted in Heroku</Text>
                    </Box>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> Merch-Store </strong></Text>
                    <Tag>Django</Tag>
                    <Tag>Django-Rest-Framework</Tag>
                    <Tag>React JS</Tag>
                    <Text fontSize="sm">MerchStore is a full stack web application allowing users to purchase merchandise. The app supports user registration/signup and signin .Payments are processed through Braintree.</Text>
                    <a href="https://github.com/ankitsridhar16/MerchStore"><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                    <a href="https://www.youtube.com/watch?v=RPjy5qoTbeo&feature=youtu.be"><FontAwesomeIcon icon={faLink}/></a>
                    </Box>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> IMS</strong></Text>
                    <Tag>Python</Tag>
                    <Tag>Flask</Tag>
                    <Text fontSize="sm">IMS is a inventory management ERP solution built using Flask and Jinja to help keep track of goods quantities and transfers across different locations.</Text>
                    <a href="https://github.com/ankitsridhar16/ERP-InventoryManager"><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                    <a href="https://github.com/ankitsridhar16/ERP-InventoryManager"><FontAwesomeIcon icon={faLink}/></a>
                    </Box>
                    <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                    <Text fontSize="2xl"><strong> Tech Niche</strong></Text>
                    <Tag>Google Assistant</Tag>
                    <Tag>Amazon Alexa</Tag>
                    <Text fontSize="sm">An app for Google Assistant using JSON which runs on supported devices like the Google Home , Home mini and Android devices with version 5.0+ , iOS devices and Smart Displays . An Alexa skill which uses "Amazon Alexa Skill Kit" SDK implemented in Node.js and hosted in AWS using AWS Lambda Service.</Text>
                    </Box>
                </SimpleGrid>
            </Box>
      </Container> 
    )
}

export default Skills
