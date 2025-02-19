import React from 'react'
import { Heading } from '@chakra-ui/react'

const GameHeading = ({gameQuery}) => {

  
  const heading = `${gameQuery?.platform?.name || ""} ${gameQuery?.genre?.name || ""} Games`;

    return (
    <Heading  as='h1' padding={3} >{heading}</Heading>
  )
}

export default GameHeading