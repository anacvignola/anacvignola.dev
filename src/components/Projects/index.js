import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StarOutline } from '@styled-icons/evaicons-outline/StarOutline';
import { GitFork } from '@styled-icons/octicons/GitFork';

import { Wrapper, Grid, Item, Content, Stats, Card } from './styles';

const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 9
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Wrapper id="portfolio">
      <h3>
        Aqui você pode ver alguns projetos pessoais que andei/ando trabalhando:
      </h3>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <StarOutline size={22} color={'#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <GitFork size={22} color={'#fff'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
