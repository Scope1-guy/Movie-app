export function SideBar() {
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

        <div class="trailer-card">
          <img src="images/last-kingdom.jpg" alt="ii" />

          <div class="overlay"></div>

          <div class="text">
            <h3>The Last Kingdom: Seven Kings Must Die</h3>
          </div>

          <button>▶</button>
        </div>

        <div class="trailer-card">
          <img src="images/mario.jpg" alt="ii" />

          <div class="overlay"></div>

          <div class="text">
            <h3>The Super Mario Bros. Movie</h3>
          </div>

          <button>▶</button>
        </div>
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
