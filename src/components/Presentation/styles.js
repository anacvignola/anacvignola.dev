import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 40px;


  ${media.lessThan("medium")`
    display: none;
  `}
`;

export const Text = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
  color: #bd93f9;

  .large {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .medium {
    font-size: 1.5rem;
  }

  ${media.lessThan("large")`
      br {
        display: none;
      }
  `}

  ${media.lessThan("medium")`
      width: 100%;

    .large {
      font-size: 1.6rem;
    }
    .medium {
      font-size: 1.4rem;
    }
  `}
`;
