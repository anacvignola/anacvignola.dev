import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Container, Text, WrapperImage, ContainerImg } from './styles';

const About = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <Container id="about">
      <Text>
        <h3>Sobre mim</h3>
        <p>
          Me chamo Ana Claudia Vignola e minha área de atuação é TI, desde os
          meus 14 anos trabalhei na área de suporte e infraestrutura, porém em
          2017 comecei a me interessar e me apaixonar pelo desenvolvimento web
          e mobile, principalmente a arte do front-end.
        </p>

        <p>
          Então no mesmo ano(2017) consegui estágio em uma startup que me motivou
          ainda mais, pois aprendi muito, e desde então não parei de de buscar
          conhecimento.
        </p>

        <p>
          Neste ano(2020) tive oportunidade de trabalhar na <a href="https://anestech.com.br/">Anestech</a>
          , onde contribui em um projeto open source voltado a COVID, desenvolvi
          o APP para android em React Native que você pode ver <a href="https://breath4lifeproject.com/" >aqui</a>.
        </p>

        <p>Atualmente estou trabalhando na <a href="https://www.b4b.ventures/">B4B Ventures</a> como
        desenvolvedora front-end.</p>

        <p>
          Tenho vontade de realizar freelancers, e também contribuir em
          trabalhos open-source onde eu puder ajudar para cada vez mais ganhar
          experiência.
        </p>

        <p>
          Você pode ver meu currículo completo <a href="https://www.linkedin.com/in/anacvignola/">aqui</a>.
        </p>
      </Text>
      <ContainerImg>
        <WrapperImage
          fluid={avatarImage.childImageSharp.fluid}
          className="avatar"
        />
      </ContainerImg>
    </Container>
  );
};

export default About;
