import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: #f8f8f2;
    margin: 2rem 0 4rem 0;
    font-weight: normal;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 1rem;
  border: 2px solid #8be9fd;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  line-height: 18px;
  h4 {
    color: #8be9fd;
  }
  p {
    margin: 5px 0;
    color: #c7c7c7;
  }

  &:hover {
    color: #50fa7b;
    border: 2px solid #50fa7b;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  background: #282a36;
  height: 100%;
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 0.5rem;
    }
    span {
      color: #fff;
      margin-left: 0.5rem;
    }
  }
`;
