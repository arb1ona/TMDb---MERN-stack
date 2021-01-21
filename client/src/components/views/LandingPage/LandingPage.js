import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from "../../Config";
import { Typography, Row } from "antd";
const { Title } = Typography;

function LandingPage() {
  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Movie Main IMage */}
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65)100%),url(""),#1c1c1c`,
          height: "500px",
          backgroundSize: "100%,cover",
          backgroundPosition: "center,center",
          width: "100%",
          position: "relative",
        }}
      ></div>

      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <Title style={{ color: "blue" }} level={2}>
            Title
          </Title>
          <p style={{ color: "green", fontSize: "1rem" }}>text</p>
        </div>
      </div>
      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Title level={2}>Movies by the latest</Title>
        <hr />
        {/* Grid Cards */}

        <Row gutter={[16, 16]}>Grid Cards</Row>

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
