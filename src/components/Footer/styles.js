import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin-bottom: 10px;
  bottom: 0;
`;

export const Text = styled.p`
  text-align: center;
  color: #bd93f9;
  font-size: 1rem;
  a {
    text-decoration: none;
    color: #bd93f9;
    font-size: 1rem;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #bd93f9;
      transform-origin: bottom right;
      transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;
