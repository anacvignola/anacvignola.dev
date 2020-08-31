import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled(Link)`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  animation: bounce 2s infinite;
  color: transparent;
  background: transparent;
  text-decoration: none;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
