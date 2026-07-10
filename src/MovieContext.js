import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [trending, setTrending] = useState(null);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const API_KEY = "5ab6e8c382c50fafdfa888334f448158";
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    async function fetchMovie() {
      try {
        const response = await fetch(popularUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovie(data.results);
        console.log(data.results);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    const API_KEY = "5ab6e8c382c50fafdfa888334f448158";
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    async function fetchGenre() {
      try {
        const response = await fetch(genreUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setGenres(data.genres);
        console.log(data.genres);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    }
    fetchGenre();
  }, []);

  useEffect(() => {
    const API_KEY = "5ab6e8c382c50fafdfa888334f448158";
    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

    async function fetchTrending() {
      try {
        const response = await fetch(trendingUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setTrending(data.results[0]);
        console.log(data.results[0]);
      } catch (err) {
        console.error("Error fetching Trending movies:", err);
      }
    }
    fetchTrending();
  }, []);

  useEffect(() => {
    const API_KEY = "5ab6e8c382c50fafdfa888334f448158";
    const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

    async function fetchUpcoming() {
      try {
        const response = await fetch(upcomingUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setUpcoming(data.results);
        console.log(data.results.slice(0, 2));
      } catch (err) {
        console.error("Error fetching Upcoming movies:", err);
      }
    }
    fetchUpcoming();
  }, []);

  return (
    <MovieContext.Provider value={{ movie, genres, trending, upcoming }}>
      {children}
    </MovieContext.Provider>
  );
}
