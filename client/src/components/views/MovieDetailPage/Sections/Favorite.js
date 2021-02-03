import React, { useEffect } from "react";
import axios from "axios";

function Favorite(props) {
  const [FavoriteNumber, setFavoriteNumber] = useState(0);

  const variable = {
    userFrom: props.userFrom,
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.backdrop_path,
    movieRunTime: props.movieInfo.runtime,
  };

  useEffect(() => {
    axios.post("/api/favorite/favoriteNumber", variable).then((response) => {
      if (response.data.success) {
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("Failed to get favoriteNUmber");
      }
    });
  }, []);

  return (
    <div>
      <button>Add to Favourite</button>
    </div>
  );
}

export default Favorite;
