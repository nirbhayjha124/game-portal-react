import {   Text, SimpleGrid,  Box} from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

 const GameGrid = ({ gameQuery}) => {

   const {games, error, isLoading} =useGames( gameQuery);
   const skeletons = [1,2,3,4,5,6];
   if(error) return (<Box textAlign="center" p={4} borderRadius="md"  >
   <Text fontSize="lg" fontWeight="bold">
     ⚠️ Error: {error}
   </Text>
 </Box>)


     return (
       <Box padding={'10px'} >
        <SimpleGrid 
        minChildWidth="250px"
        spacing={6} 
        padding='10px'
        >
            {isLoading && skeletons.map((Skeleton )=> (<GameCardSkeleton key={Skeleton} />))}
            {games.map((game) => (<GameCard key={game.id} game={game} />))}
        </SimpleGrid > 
        </Box>
     )


};

export default GameGrid;
