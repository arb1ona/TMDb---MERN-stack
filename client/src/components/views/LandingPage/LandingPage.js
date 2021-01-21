import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import { Typography, Row } from "antd";
import GridCard from "./Sections/GridCard";
import MainImage from "./Sections/MainImage";
const { Title } = Typography;

function LandingPage() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
      });
  }, []);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Movie Main IMage */}
      {/* .backdrop_path its faster then rendering so we rerender all the component */}
      {Movies[1] && (
        <MainImage
          image={`${IMAGE_URL}w1280${Movies[1].backdrop_path}`}
          title={`${Movies[1].original_title}`}
          text={`${Movies[1].overview}`}
        />
      )}

      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Title level={2}>Movies by the latest</Title>
        <hr />
        {/* Grid Cards */}

        <Row gutter={[16, 16]}>
          {Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <GridCard
                image={
                  movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`
                }
                movieId={movie.id}
              />
            </React.Fragment>
          ))}
        </Row>

        {/* Load More Button */}

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
