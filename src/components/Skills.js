
import React from 'react'
import { Container,Box,Flex,Text,Divider,SimpleGrid,Tag, Heading } from "@chakra-ui/react";
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
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Text fontSize="sm">Random text</Text>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                <a href=""><FontAwesomeIcon icon={faLink}/></a>
                </Box>
                <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                <Text fontSize="2xl"><strong> Kromatic </strong></Text>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Text fontSize="sm">Random text</Text>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                <a href=""><FontAwesomeIcon icon={faLink}/></a>
                </Box>
                <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                <Text fontSize="2xl"><strong> Kromatic </strong></Text>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Text fontSize="sm">Random text</Text>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                <a href=""><FontAwesomeIcon icon={faLink}/></a>
                </Box>
                <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                <Text fontSize="2xl"><strong> Kromatic </strong></Text>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Text fontSize="sm">Random text</Text>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                <a href=""><FontAwesomeIcon icon={faLink}/></a>
                </Box>
                <Box padding="4" boxShadow="2xl" p="6" rounded="3xl" >
                <Text fontSize="2xl"><strong> Kromatic </strong></Text>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Tag>Sample Tag</Tag>
                <Text fontSize="sm">Random text</Text>
                <a href=""><FontAwesomeIcon icon={faGithub}/> <t></t></a>
                <a href=""><FontAwesomeIcon icon={faLink}/></a>
                </Box>
                </SimpleGrid>


                
            </Box>
      </Container> 
    )
}

export default Skills
