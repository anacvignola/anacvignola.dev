import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import SEO from '../components/seo';
import GlobalStyles from '../styles/global';

const Container = styled.section`
  align-items: center;
  background-image: url('https://anacvignola.dev/assets/images/404.gif');
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 800px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;

  ${media.lessThan("large")`
    background-size: 600px;
  `}

  ${media.lessThan("medium")`
    background-size: 280px;
  `}
`

const Title = styled.h1`
  color: #ff5555;
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
`

const Text = styled.p`
  color: #f8f8f2;
  font-family: Courier, monospace;
`

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Ué? Cadê? Parece que não tem o que você procura.</Text>
  </Container>
)

export default NotFoundPage;
