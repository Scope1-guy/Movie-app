import { useContext } from "react"; // useContext hook is used to get the value stored inside a Context like "UserContext.Provider"
import { UserContext, UserProvider } from "./UserContext";
import LoginPage from "./component/login-page";
import { SideBar } from "./component/sidebar";

const pageHeader = ["Home", "TV Series", "Animation", "Mistry", "More"];

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

function AppContent() {
  const { page } = useContext(UserContext); //useContext(UserContext); means open the UserContext cupboard and take whatever is in the curly bracket here from the cupboard, in this case, page

  // const [movie, setMovie] = useState([]);

  // const API_KEY = "5ab6e8c382c50fafdfa888334f448158";
  // const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // useEffect(() => {
  //   async function fetchMovie() {
  //     try {
  //       const response = await fetch(popularUrl);
  //       const data = await response.json();
  //       // setMovie(data);
  //       console.log(data.results);
  //     } catch (err) {
  //       console.log("Error fetching movies:", err);
  //     }
  //   }
  //   fetchMovie();
  // }, []);

  console.log(page);
  return (
    <>
      {page === "start" && <StartPage />}

      {page === "login" && <LoginPage />}

      {page === "movie-app" && <MovieApp />}
    </>
  );
}

// function AppContent() {
//   const { page } = useContext(UserContext);

//   console.log("AppContent page:", page);

//   return (
//     <div>
//       <h1>Current Page: {page}</h1>

//       {page === "start" && <StartPage />}
//       {page === "login" && <h2>LOGIN PAGE WORKING</h2>}
//     </div>
//   );
// }

function StartPage() {
  const { setPage, page } = useContext(UserContext);

  return (
    <div className="start-page">
      <div>
        <h1>Watch All Movies</h1>
        <p>Download and watch offline wherever you are</p>
        <button
          onClick={() => {
            console.log("Before", page);
            setPage("login");
            console.log("setPage called");
          }}
        >
          Enter Now
        </button>
      </div>
    </div>
  );
}

function MovieApp() {
  return (
    <div className="movie-app">
      <SideBar />
      <div className="main-page">
        <NavBar />
        <MainMoviePreview />
        <MovieList />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <header className="page-header">
      <nav className="page-header-navbar">
        <ul className="page-header-nav-list">
          {pageHeader.map((list) => (
            <li>{list}</li>
          ))}
        </ul>

        <div>&#128276;</div>
      </nav>

      <div>
        <h3>Current User</h3>
        {/* <p>User email</p> */}
      </div>
    </header>
  );
}

function MainMoviePreview() {
  return (
    <div className="container">
      <img src="images/spiderman.jpg" alt="Spider-Man" />

      <div className="overlay"></div>

      <div className="content">
        <span className="badge">Now Trending</span>

        <div className="genres">
          <span>Action</span>
          <span>Adventure</span>
        </div>

        <div>
          <h1>Spider-Man </h1>
          <h2>Across The Spider-Verse</h2>
        </div>

        <p>
          2023 animated film following Miles Morales as he embarks on a journey
          across the multiverse while encountering different Spider-People.
        </p>

        <div className="buttons">
          <button className="watch">▶ Watch</button>

          <button className="list">+ Watchlist</button>
        </div>
      </div>

      <div className="slider">
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

function MovieList() {
  return (
    <div className="movie-list">
      <div className="movies">
        <div className="card">
          <img src="images/flash.jpg" alt="The Flash" />

          <div className="overlay"></div>

          <div className="content">
            <span className="genre">Fantasy</span>

            <h2>The Flash (2023)</h2>

            <p>Barry Allen travels through time and changes the future.</p>

            {/* <a href="#">See more...</a> */}
          </div>

          <button className="play">▶</button>
        </div>

        <div className="card">
          <img src="images/manifest.jpg" alt="Manifest" />

          <div className="overlay"></div>

          <div className="content">
            <span className="genre">Mystery</span>

            <h2>Manifest</h2>

            <p>Passengers return after years and uncover strange secrets.</p>

            {/* <a href="#">See more...</a> */}
          </div>

          <button className="play">▶</button>
        </div>

        <div className="card">
          <img src="images/elemental.jpg" alt="Elemental" />

          <div className="overlay"></div>

          <div className="content">
            <span className="genre">Animation</span>

            <h2>Elemental</h2>

            <p>Fire and water discover friendship in Element City.</p>

            {/* <a href="#">See more...</a> */}
          </div>

          <button className="play">▶</button>
        </div>

        <div className="card">
          <img src="images/interstellar.jpg" alt="Interstellar" />

          <div className="overlay"></div>

          <div className="content">
            <span className="genre">Sci-Fi</span>

            <h2>Interstellar</h2>

            <p>Explorers travel through space to save humanity.</p>

            {/* <a href="#">See more...</a> */}
          </div>

          <button className="play">▶</button>
        </div>
      </div>
    </div>
  );
}
