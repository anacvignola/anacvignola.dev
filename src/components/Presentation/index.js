import React from 'react';

import Background from '../Background';
import SocialLinnks from '../SocialLinks';

import { Container, Text, Wrapper, ImgContainer } from './styles';
import ScrollButton from '../ScrollButton';

const Presentation = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <p className="medium">
              Olá, meu nome é <span className="large">Ana</span> e eu sou
            <span className="large"> Desenvolvedora Fullstack </span>
              com fóco em <span className="large">Front-end</span>.
          </p>
          <SocialLinnks />
        </Text>
        <ImgContainer>
          <Background />
        </ImgContainer>
      </Wrapper>
      <ScrollButton />
    </Container>
  );
};

export default Presentation;
