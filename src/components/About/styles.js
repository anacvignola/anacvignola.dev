import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const WrapperImage = styled(Img)`
  border-radius: 50%;
  width: 100%;
  max-width: 400px;
  border: 3px solid #bd93f9;
  border-radius: 50%;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const ContainerImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 90vh;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  padding: 30px 0px;
`;

export const Text = styled.p`
  color: #f8f8f2;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;

  h3 {
    color: #bd93f9;
    font-size: 1.4rem;
  }

  p {
    margin: 1rem 0;

    a {
      text-decoration: none;
      color: #8be9fd;
    }
    a:hover {
      color: #50fa7b;
    }
  }

  ${media.lessThan("medium")`
      width: 100%;
  `}
`;
