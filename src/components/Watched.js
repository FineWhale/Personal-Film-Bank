import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <div className="no-content">
            <pre className="ascii-art">{`
  ⠀⠀⠠⠄⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠁⠀⠀⢀⡠⠤⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⠤⠀⠀⠀⠀
  ⠀⠀⠘⠃⠀⠀⣀⡠⠔⠁⠀⠀⠀⠈⢦⠀⠀⠀⠀⢠⡖⠋⠉⠉⠻⡒⠈⠁⠀⠀
  ⠀⠀⢠⠔⠉⠁⠀⠀⠄⠀⠀⠀⠠⣴⣦⣧⠀⠀⢠⣿⠃⢀⠀⠀⠀⠸⠈⢂⠀⠀
  ⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⢠⢳⣿⣿⣿⣄⠄⠉⠁⡔⠞⠢⡀⠀⠀⠀⠀⢄⡀
  ⣐⣺⡀⠀⠀⠀⠀⠀⠀⠀⠀⡆⣼⣿⣿⡿⠀⠤⠤⠤⠏⠀⠀⠁⠀⠀⢆⠀⠀⡡
  ⠈⠋⠈⠒⠦⠤⠤⠒⠒⠒⠒⠧⣻⡿⠟⠳⠤⠤⠤⠤⠤⠤⠔⠑⠒⠊⠀⠁⠂⠁
              `}</pre>
            <h2 className="no-movies-text">Let's watch some this weekend!</h2>
          </div>
        )}
      </div>
    </div>
  );
};
