import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <div className="no-content">
            <pre className="ascii-art">
              {`                      __---__                         ______
                        /    ___\\_             o  O  O _(      )__
                        /====(_____\\___---_  o        _(           )_
                         |                    \\        (_  AI-YA!!!!   )
                            |                     |@        (_  MOVIE TIME!!_)
                          \\       ___         /           (__         __)
          \\ __----____--_\\____(____\\_____/                (______)
==|__----____--__|
/      /    \\____/)_
       /        ______)
     /           |  |
    |           _|  |
    ______\\______________|______
   /                    *   *   \\
   /_____________*____*___________\\
   /   *     *                      \\
   /__________________________________\\
   / *                                  \\
   /_____________________________________\\
|                        |
|________________________|
|                        |
|________________________|`}
            </pre>
            <h2 className="no-movies-text">No movies yet!</h2>
          </div>
        )}
      </div>
    </div>
  );
};
