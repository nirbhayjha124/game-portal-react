import React from 'react'
import { Badge } from '@chakra-ui/react'

const score ={
    score:0,
}
const CriticScore = ({score}) => {

  let color = score > 75? 'green' : score > 60 ? 'yellow' : '';

    return (
      <Badge
       fontSize='14px'
       paddingX={2}
      colorScheme={color}
      >{score}</Badge>
  )
}

export default CriticScore