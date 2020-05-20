import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin: 3%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>
        © <a href="https://theobernard97.github.io/">Théo Bernard</a> 2020
      </p>
    </FooterWrapper>
  );
}

export default Footer;
