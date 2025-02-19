import React from 'react'
import { HStack, List, ListItem, Image, Spinner, Button, Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = ({ onSelectGenre, selectedGenre }) => {

  const { data, isLoading, error } = useGenres();
  //const { data, isLoading, error } = useData('/genres');

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (

    <List  >
      <Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
      {data.map(genre => (
        <ListItem
          paddingY='5px'
          _hover={{
            transform: "scale(1.05)", // Slight zoom effect on hover
          }}
          onClick={() => onSelectGenre(genre)}
          key={genre.id}
        >
          <HStack  >
            <Image boxSize={genre.id === selectedGenre?.id ? "34px" : '32px'}
              borderRadius={3}
              objectFit='cover'

              src={genre.image_background} />
            <Button
              whiteSpace='normal'
              textAlign='left'
              variant='link'
              transition="all 0.3s ease-in-out"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>)
      )}
    </List >
  )
}

export default GenreList;




