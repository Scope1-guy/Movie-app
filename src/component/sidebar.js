import { useContext } from "react"; // useContext hook is used to get the value stored inside a Context like "UserContext.Provider"
import { MovieContext } from "../MovieContext";

export function SideBar() {
  const { upcoming } = useContext(MovieContext);
  return (
    <div className="sidebar">
      {/* Search */}

      <div className="search-box">
        <span className="material-icons">search</span>

        <input type="text" placeholder="Search Movies" />
      </div>

      {/* <!-- Trailer Section --> */}

      <section class="section">
        <div class="section-title">
          <h2>🔥 New Trailer</h2>

          {/* <a href="#">See All ></a> */}
        </div>

        {/* <!-- Card --> */}

        {upcoming.map((movie) => (
          <div class="trailer-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />

            <div class="overlay"></div>

            <div class="text">
              <h3>{movie.title}</h3>
            </div>

            <button>▶</button>
          </div>
        ))}
      </section>

      {/* <!-- Continue --> */}

      <section class="section">
        <h2>Continue Watching</h2>

        <div class="watch-card">
          <img src="images/dark.jpg" alt="ii" />

          <div>
            <h3>Dark Season 3</h3>

            <p>Episode 3</p>
          </div>

          <button>▶</button>
        </div>

        <div class="watch-card">
          <img src="images/transformers.jpg" alt="ii" />

          <div>
            <h3>Transformer</h3>

            <p>Movie</p>
          </div>

          <button>▶</button>
        </div>

        <div class="watch-card">
          <img src="images/lupin.jpg" alt="ii" />

          <div>
            <h3>Lupin Season 2</h3>

            <p>Episode 1</p>
          </div>

          <button>▶</button>
        </div>
      </section>
    </div>
  );
}

// const [popularMovies, setPopularMovies] = useState([]);
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [topRatedMovies, setTopRatedMovies] = useState([]);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);

//   const API_KEY = "5ab6e8c382c50fafdfa888334f448158";

//   const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
//   const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
//   const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
//   const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;

//   async function fetchPopular() {
//     const response = await fetch(popularUrl);
//     const data = await response.json();
//     setPopularMovies(data);
//     console.log(popularMovies);
//   }

//   async function fetchTrending() {
//     const response = await fetch(trendingUrl);
//     const data = await response.json();
//     setPopularMovies(data.result);
//   }

//   async function fetchTopRated() {
//     const response = await fetch(topRatedUrl);
//     const data = await response.json();
//     setPopularMovies(data.result);
//   }

//   async function fetchUpcoming() {
//     const response = await fetch(upcomingUrl);
//     const data = await response.json();
//     setPopularMovies(data.result);
//   }

//   useEffect(() => {
//     fetchPopular();
//     fetchTrending();
//     fetchTopRated();
//     fetchUpcoming();
//   }, []);
