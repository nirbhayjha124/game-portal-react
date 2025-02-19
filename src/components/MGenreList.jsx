import React from 'react'
import {  Spinner, Box , Flex, Button} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const MGenreList =({ onSelectGenre, selectedGenre,  }) =>{

    const { data, isLoading, error } = useGenres();
  
    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <Box
          px={2}
          overflowX="auto"
          whiteSpace="nowrap"
          maxH="40px"
          maxW="100vw"
         
         className='hide-scrollbar'
        >
          <Flex gap={2}>
            {data.map((genre) => (
              <Button
                key={genre.id}
                paddingY="5px"
                paddingX="10px"
                cursor="pointer"
                border="0.1px solid"
                borderColor={'gray.700'}
                rounded="2xl"
                fontSize="sm"
                minW={'-moz-fit-content'}
                maxH={'30px'}
                transition="all 0.2s"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            ))}
          </Flex>
        </Box>
      );
    
  }
  export default MGenreList;