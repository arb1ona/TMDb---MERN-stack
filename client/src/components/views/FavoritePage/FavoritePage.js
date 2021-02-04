import axios from "axios";
import React, { useEffect, useState } from "react";
import "./favoritte.css";
import { Popover } from "antd";
import { IMAGE_URL } from "../../Config";

function FavoritePage() {
  const variables = { userFrom: localStorage.getItem("userId") };
  const [FavoritedMovies, setFavoritedMovies] = useState([]);

  useEffect(() => {
    fetchFavoritedMovies();
  }, []);

  const fetchFavoritedMovies = () => {
    axios
      .post("/api/favorite/getFavoritedMovie", variables)
      .then((response) => {
        if (response.data.success) {
          setFavoritedMovies(response.data.favorites);
        } else {
          alert("Failed to get liked videos");
        }
      });
  };

  const onClickRemove = (movieId) => {
    const variables = {
      movieId: movieId,
      userFrom: localStorage.getItem("userId"),
    };
    axios
      .post("/api/favorite/removeFromFavorite", variables)
      .then((response) => {
        if (response.data.success) {
          fetchFavoritedMovies();
        } else {
          alert("Failed to remove from favorite");
        }
      });
  };

  const renderTableBody = FavoritedMovies.map((movie, index) => {
    const content = (
      <div>
        {movie.moviePost ? (
          <img src={`${IMAGE_URL}w500${movie.moviePost}`} alt="moviePost" />
        ) : (
          "no Image"
        )}
      </div>
    );
    return (
      <tr>
        <Popover content={content} title={`${movie.moviePost}`}>
          <td>{movie.movieTitle}</td>
        </Popover>
        <td>{movie.movieRunTime}</td>
        <td>
          <button onClick={() => onClickRemove(movie.movieId)}>
            Remove from Favorites
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3>Favorite Movies By Me</h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Remove from favorites</th>
          </tr>
        </thead>
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
