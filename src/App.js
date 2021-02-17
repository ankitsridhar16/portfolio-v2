import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Heading,
  Text,
  Center,
  Container,
  Spacer
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
      <Flex p="8">
          <Box p="2">
              <Heading bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text" size="xl">Ankit Sridhar</Heading>
          </Box>
          <Spacer />
          <ColorModeSwitcher/>
          </Flex>
        <Grid minH="100vh" p={3}>
          
          <About/>
          <Work/>
          <Skills/>
        </Grid>
          
          <Container p ="10">
          <Center>
          <Text fontSize="2xl" padding="4" align="center"><strong> Copyright 2021 | Ankit Sridhar </strong></Text>
          </Center>
          </Container>
         
      </Box>
    </ChakraProvider>
  );
}

export default App;
