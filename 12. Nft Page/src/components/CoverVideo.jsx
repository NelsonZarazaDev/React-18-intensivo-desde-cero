import React from "react";
import VIDEO from "../assets/Home Video.mp4";
import styled from "styled-components";
export default function CoverVideo() {
  return (
    <VideoContainer>
      <video src={VIDEO} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
}
const VideoContainer = styled.div`
  width: 100%;
  video {
    width: 100%;
    height: auto;
    @media (max-width: 64em) {
      min-width: 40vh;
    }
  }
`;
