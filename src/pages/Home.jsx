import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 250px;
    width: 25%;
    margin-right: 2.5%;
  }

  p {
    width: 67.5%;
    margin-left: 2.5%;
    font-size: 1.2rem;
  }
`;

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Wrapper>
        <div>
          <p>
            Studio Ghibli, Inc. is a Japanese animation film studio based in
            Koganei, Tokyo, Japan. The studio is best known for its animated
            feature films, and has also produced several short films, television
            commercials, and one television film. It was founded on 15 June
            1985, after the success of Nausicaä of the Valley of the Wind
            (1984), with funding by Tokuma Shoten. Studio Ghibli has also
            collaborated with video game studios on the visual development of
            several video games.
          </p>
          <img src="./assets/Chihiro_.png" alt="Chihiro" />
        </div>
        <div>
          <img src="./assets/Totoro.png" alt="Totoro" />
          <p className="text2">
            Six of Studio Ghibli's films are among the 10 highest-grossing anime
            films made in Japan, with Spirited Away (2001) being the highest,
            grossing over US$360 million worldwide. Many of their works have won
            the Animage Anime Grand Prix award, and four have won the Japan
            Academy Prize for Animation of the Year. Five of Studio Ghibli's
            films have received Academy Award nominations. Spirited Away won the
            Golden Bear in 2002 and the Academy Award for Best Animated Feature
            Film in 2003. Totoro, a character from My Neighbor Totoro, is the
            studio's mascot.
          </p>
        </div>
        <div>
          <p>
            On 3 August 2014, Studio Ghibli temporarily halted production
            following the retirement of director Hayao Miyazaki, who co-founded
            the studio with the late Isao Takahata. In February 2017, Toshio
            Suzuki announced that Miyazaki had come out of retirement again to
            direct a new feature film, How Do You Live?, with Studio Ghibli.
          </p>
          <img src="./assets/Momonoke.png" alt="Momonoke" />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Home;
