import { useContext } from "react"; // useContext hook is used to get the value stored inside a Context like "UserContext.Provider"
import { UserContext, UserProvider } from "./UserContext";
import { MovieContext, MovieProvider } from "./MovieContext";
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

  console.log(page);
  return (
    <>
      {page === "start" && <StartPage />}

      {page === "login" && <LoginPage />}

      {page === "movie-app" && <MoviePage />}
    </>
  );
}

function StartPage() {
  const { setPage } = useContext(UserContext);

  return (
    <div className="start-page">
      <div>
        <h1>Watch All Movies</h1>
        <p>Download and watch offline wherever you are</p>
        <button
          onClick={() => {
            setPage("login");
          }}
        >
          Enter Now
        </button>
      </div>
    </div>
  );
}

function MoviePage() {
  return (
    <MovieProvider>
      <MovieApp />
    </MovieProvider>
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
  const { user } = useContext(UserContext);
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
        <h3>{user.username}</h3>
        {/* <p>User email</p> */}
      </div>
    </header>
  );
}

function MainMoviePreview() {
  const { trending } = useContext(MovieContext);

  return (
    <>
      {trending && (
        <div className="container">
          <img
            src={`https://image.tmdb.org/t/p/w500${trending.poster_path}`}
            alt={trending.title}
          />

          <div className="overlay"></div>

          <div className="content">
            <span className="badge">Now Trending</span>

            <div className="genres">
              <span>Action</span>
              <span>Adventure</span>
            </div>

            <div>
              <h1>{trending.title} </h1>
              <h2>Across The Spider-Verse</h2>
            </div>

            <p>{trending.overview}</p>

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
      )}
    </>
  );
}

function MovieList() {
  const { movie, genres } = useContext(MovieContext);

  return (
    <div className="movie-list">
      <div className="movies">
        {movie.map((film) => {
          const genreNames = film.genre_ids.map((id) => {
            const genre = genres.find((genre) => genre.id === id);
            return genre?.name;
          });

          return (
            <div className="card" key={film.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              />

              <div className="overlay"></div>

              <div className="content">
                <span className="genre">{genreNames.join(", ")}</span>

                <h2>{film.title}</h2>

                <p>Barry Allen travels through time and changes the future.</p>

                <p>See more...</p>
              </div>

              {/* <button className="play">▶</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
