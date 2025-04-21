import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar";

function Home() {
  const movies = [
    { id: 1, title: "Doctor Strange" },
    { id: 2, title: "The Dark Knight" },
    { id: 3, title: "Interstellar" },
  ];
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
      <h1>Home Page</h1>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
