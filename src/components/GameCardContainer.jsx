import { Box } from '@chakra-ui/react'


const GameCardContainer = ({Children}) => {
  return (
    <Box width="300px"  borderRadius={10} overflow={'hidden'}>
        {Children}
    </Box>
  )
}

export default GameCardContainer