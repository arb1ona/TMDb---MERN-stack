import React from "react";
import { useEffect, useState } from "react";
import MainImage from "../LandingPage/Sections/MainImage";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import { Descriptions, Button, Row } from "antd";
import GridCard from "../LandingPage/Sections/GridCard";

function MovieDetailPage(props) {
  const [Movie, setMovie] = useState([]);
  const [Crews, setCrews] = useState([]);

  useEffect(() => {
    const movieId = props.match.params.movieId;
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);

        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setCrews(response.cast);
          });
      });
  }, []);

  return (
    <div>
      {/* Movie Main IMage */}
      {Movie && (
        <MainImage
          image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
          title={`${Movie.original_title}`}
          text={`${Movie.overview}`}
        />
      )}

      {/* Body */}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Add to Favourite</Button>
        </div>
        {/*Movie Info Table */}
        <Descriptions title="Movie Info" bordered>
          <Descriptions.Item label="Title">
            {Movie.original_title}
          </Descriptions.Item>
          <Descriptions.Item label="Release date">
            {Movie.release_date}
          </Descriptions.Item>
          <Descriptions.Item label="Reveneu">{Movie.revenue}</Descriptions.Item>
          <Descriptions.Item label="RunTime">{Movie.runtime}</Descriptions.Item>
          <Descriptions.Item label="Vote_Average">
            {Movie.vote_average}
          </Descriptions.Item>
          <Descriptions.Item label="Vote_Count">
            {Movie.vote_count}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{Movie.status}</Descriptions.Item>
          <Descriptions.Item label="Popularity">
            {Movie.popularity}
          </Descriptions.Item>
        </Descriptions>
      </div>
      <br />
      {/* Actors Grid*/}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button>Toggle Actor</Button>
      </div>

      {/* <Row gutter={[16, 16]}>
        {Crews &&
          Crews.map((crew, index) => (
            <React.Fragment key={index}>
              {crew.profile_path && (
                <GridCard
                  actor
                  image={`${IMAGE_URL}w500${crew.profile_path}`}
                />
              )}
            </React.Fragment>
          ))}
      </Row> */}
    </div>
  );
}

export default MovieDetailPage;
