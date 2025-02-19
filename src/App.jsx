import './App.css';
import { Box, Flex, Grid, GridItem,  Show,   Hide,} from '@chakra-ui/react'
import NavBar from "./components/NavBar.jsx";
import GameGrid from './components/GameGrid.jsx';
import GenreList from './components/GenreList.jsx';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector.jsx';
import { Platform } from './hooks/useGames.js';
import { Genre } from './hooks/useGenres.js';
import GameHeading from './components/GameHeading.jsx'
import SortSelector from './components/SortSelector.jsx';
import MGenreList from './components/MGenreList.jsx';



export const GameQuery = {
  genre: Genre,
  platform: Platform,
  searchText: '',
  sortOrder: '',
}

function App() {


  const [gameQuery, setGameQuery] = useState('');

  return (


    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      {/* Navigation Bar */}
      <GridItem area="nav" position={'sticky'} top={'0'} zIndex={'1000'} >
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>

      {/* Genre Lis for large screen */}
      <Show above='lg' >
        <GridItem 
             area="aside"
             paddingX={5} 
             overflow={'auto'}
              maxH="calc(100vh - 80px)"
              className='hide-scrollbar'
             >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>

      {/* Main section */}
      <GridItem area="main" p={2} >
        <GameHeading gameQuery={gameQuery} />
        <Box 
           px={2}
           overflowX={'auto'}
           whiteSpace={"nowrap"}
           >
          <Flex marginBottom={5} wrap={'nowrap'}  >
            <Box marginRight={5} >
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
        </Box>

         {/*  Mobile Genre List*/}
         <Hide above="lg">
          <MGenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} /> 
        </Hide>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>




  );
}

export default App;
