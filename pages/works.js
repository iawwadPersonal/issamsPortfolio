import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/securityApp.png'

const Works = () => {
  return (
    <Container>
	<Heading as="h3" fontSize={20} mb={4}>
	  Works
	</Heading>
	<SimpleGrid columns={[1,1,2]} gap={6}>
	<Section delay={0.3}>
	  <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
		A Social Event App
	  </WorkGridItem>
	</Section>
	<Section delay={0.4}>
          <WorkGridItem id="secondInk" title="secondInkdrop" thumbnail={thumbInkdrop}>
                Another work
          </WorkGridItem>
        </Section>
	</SimpleGrid>
    </Container>
  )
}

export default Works
