
import React, { useState } from 'react'
import { Card, CardBody, Heading, HStack, Image, Box } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'



const GameCard = ({ game }) => {

  const [activeImage, setActiveImage] = useState(game.background_image);  

  return (
    <Card
      maxW="full"
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'

    >
      {/* Background Image */}
      <Image
        src={getCroppedImageUrl(activeImage)}
        alt={game.name}
        objectFit={'cover'}
        height={'200px'}
        width={'100%'}
      />

      {/* Game Screenshots */}
      <HStack overflowX="auto" whiteSpace="nowrap" padding="10px" spacing={2} maxW="100%" className="hide-scrollbar">
        {game.short_screenshots?.map((screenshot) => (
          <Box
            key={screenshot.id}
            width="60px"
            height="40px"
            flexShrink={0}
            cursor="pointer"
            onMouseEnter={() => setActiveImage(screenshot.image)} // Change on hover
            onClick={() => setActiveImage(screenshot.image)} // Keep on tap/click
            transition="0.2s ease-in-out"
            _hover={{ transform: "scale(1.1)", opacity: 0.8 }}
          >
            <Image
              src={screenshot.image}
              alt="Screenshot"
              borderRadius={5}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        ))}
      </HStack>

      <CardBody paddingTop={0} paddingRight={3} paddingLeft={3}>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='xl' textAlign={'left'} >{game.name}</Heading>
      </CardBody>


    </Card>
  )
}

export default GameCard

