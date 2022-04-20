import { Container, List, ListItem, Box, Heading, Image, Link, SimpleGrid, Button, Icon, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import {BioSection, BioYear} from '../components/bio'
import {IoLogoInstagram, IoLogoGithub,IoLogoDiscord} from 'react-icons/io5'
import {GridItem} from '../components/grid-item'

const Page = () => {
  return (
 <Layout>
    <Container>
       <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
         Hello, I&apos;m a full-stack developer on Salesforce, based in the U.S!
       </Box>

       <Box display={{ md: 'flex' }}>
         <Box flexGrow={1}>
	   <Heading as="h2" variant="page-title">
             Issam Awwad
           </Heading>
      <p>Digital Craftzman (Developer / Reader / Writer) </p>
          </Box>
	<Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
	 <Image 
	 borderColor="whiteAlpha.800" 
	 borderWidth={2} 
	 borderStyle="solid" 
	 maxWidth="100px" 
	 display="inline-block" 
	 borderRadius="full" 
	 src="/images/profileImage.jpg"
	 alt="Profile Image"/>
	</Box>
        </Box>

       <Section delay={0.1}>
	 <Heading as="h3" variant="section-title">
	 Work
	</Heading>
	<Paragraph>Issam is a Certified Salesforce Developer with a full passion for technology. From building solutions on the Salesforce platform to learning new technology trends. An aspiring writer and love to read anything Fantasy, history, and manga. Currently, product called {' '}
	<NextLink href="/works/inkdrop">
	  <Link>Inkdrop</Link>
	</NextLink>
	.
	</Paragraph>
	<Box align="center" my={4}>
	  <NextLink href="/works">
	<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
	My Portfolio
	</Button>
	</NextLink>
	</Box>
	</Section>
<Section delay={0.2}>
          <Heading as="h3" variant="section-title">
           Bio
          </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          Born in Chicago, Illinois
        </BioSection>
        <BioSection>
           <BioYear>2016</BioYear>
           Completed my undergrad in computer science from the University of Illinois
        </BioSection>
        <BioSection>
           <BioYear>2016</BioYear>
           Started my first job at American Express
        </BioSection>
        <BioSection>
           <BioYear>2018/Present</BioYear>
           Worked at ASU for about 6 months then started working at Deloitte
        </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I &hearts;
          </Heading>
          <Paragraph>
                <Link href="https://goodreads.com/issamslibrary" target="_blank"passHref>
                Reading, Writing
                </Link>
                , WeightLifting, and fast cars
          </Paragraph>
         </Section>	

	<Section delay={0.3}>
	  <Heading as="h3" variant="section-title">
	   On the web
	  </Heading>
	  <List>
	  <ListItem>
	  <Link href="https://github.com" target="_blank" passHref>
	  <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
	  @iawwad
	   </Button>
	  </Link>
	  </ListItem>
	  <ListItem>
          <Link href="https://instagram.com/issam__aw/" target="_blank" passHref>
          <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
          @issam__aw
           </Button>
          </Link>
          </ListItem>
	  </List>
	</Section>
       </Container>
  	</Layout>
	)
}

export default Page
