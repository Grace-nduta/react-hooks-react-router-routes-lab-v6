import NavBar from "../components/NavBar";

function Actors() {
  const actors = [
    {
      id: 1,
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
    },
    {
      id: 2,
      name: "Justin Timberlake",
      movies: ["Trolls", "Friends with Benefits", "The Social Network"],
    },
    {
      id: 3,
      name: "Anna Kendrick",
      movies: ["Pitch Perfect", "Into The Wood"],
    },
    {
      id: 4,
      name: "Tom Cruise",
      movies: [
        "Jack Reacher: Never Go Back",
        "Mission Impossible 4",
        "War of the Worlds",
      ],
    },
  ];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
