import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MuseumWrapper = styled.div`
  p {
    font-size: 1.2rem;
    margin: 2% 9%;
  }

  iframe {
    background-color: grey;
    width: 711px;
    height: 400px;
  }

  .btn-div {
    margin: 2.5%;

    .btn {
      color: unset;
      text-decoration: none;
      background-color: #5fb4c9;
      padding 10px;
      border: solid black 1px;
      border-radius: 4px;
      &:hover {
        background-color: #6ec9dd;
      }
    }
  }

  @media all and (max-width: 944px) { 
    
    p {
      margin: 2% auto;
      width: 100%;
    }

    iframe {
      display: none;
    }

    .btn-div {
      margin: 10%;
  }
`;

function Museum() {
  return (
    <MuseumWrapper>
      <Header />
      <h1>Ghibli Museum, Mikata</h1>
      <p>
        The Ghibli Museum is a museum showcasing the work of the Japanese
        animation studio Studio Ghibli. It is located in Inokashira Park in
        Mitaka, a western city of Tokyo, Japan. The museum combines features of
        a children's museum, technology museum, and a fine arts museum, and is
        dedicated to the art and technique of animation. Some features include a
        replica of the Catbus from My Neighbor Totoro (1988), a café, bookstore,
        rooftop garden, and a theater for exclusive short films by Studio
        Ghibli.
      </p>
      <iframe
        src="https://www.youtube.com/embed/KE6bUMwpsyQ"
        title="Studio Ghibli"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="btn-div">
        <a className="btn" href="http://www.ghibli-museum.jp/en/">
          Ghibli Museum
        </a>
      </div>
      <Footer />
    </MuseumWrapper>
  );
}

export default Museum;
