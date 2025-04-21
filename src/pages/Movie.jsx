import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
        setError("Failed to fetch movie. Please try again later.");
      }
    };

    fetchMovie();
  }, [id]);

  if (error) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <p>{error}</p>
        </main>
      </>
    );
  }

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <p>Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          {movie.genres && movie.genres.length > 0 ? (
            movie.genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span>
            ))
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Movie;
  
