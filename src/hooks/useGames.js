import React from 'react'
import { useState, useEffect } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';


export const Platform = {
  id: 0,
  name: '',
  slug: ''

}

export const Game = {
  id: 0,
  name: '',
  background_image: '',
  short_screenshots: [
    { id: 0, image: '' }
  ],
  parent_platforms: [],

};



const useGames = (gameQuery) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient.get('/games', {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
        ordering: gameQuery.sortOrder,
      }
    }, { signal: controller.signal })
      .then(response => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        if (error instanceof CanceledError) return;
        setError('Request failed with status code 404', error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [gameQuery]);

  return { games, error, isLoading };

}

export default useGames

