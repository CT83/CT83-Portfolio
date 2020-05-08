import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    getRepoData();
  }, []);

  function getRepoData() {
    const client = new ApolloClient({
      uri: "https://api.github.com/graphql",
      request: operation => {
        operation.setContext({
          headers: {
            authorization: `Bearer ${atob(openSource.githubConvertedToken)}`
          }
        });
      }
    });

    client
      .query({
        query: gql`
        {
        user(login: "${openSource.githubUserName}") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            totalCount
            edges {
              node {
                ... on Repository {
                  name
                  description
                  forkCount
                  stargazers {
                    totalCount
                  }
                  url
                  id
                  diskUsage
                  primaryLanguage {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
        `
      })
      .then(result => {
        setrepoFunction(result.data.user.pinnedItems.edges);
        console.log(result);
      });
  }

  function setrepoFunction(array) {
    setrepo(array);
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="opensource">
      <h1 className="project-title">Projects</h1>
      <p className="project-subtitle"><a href="https://www.linkedin.com/pulse/i-made-ai-tool-detect-facial-expressions-while-you-watch-rohan-sawant/">Hemuer</a>, <a href="https://www.linkedin.com/pulse/i-made-ai-chrome-extension-fight-fake-news-rohan-sawant/">Bunyip</a> and <a href="https://www.linkedin.com/pulse/failed-rumaro-ai-recognize-emotions-apparel-body-pose-rohan-sawant/">Rumaro</a> are my favourites!</p>
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          return <GithubRepoCard repo={v} key={v.node.id} />;
        })}
      </div>
      <Button text={"More Projects"} className="project-button" href={socialMediaLinks.github} newTab={true} />
    </div>
    </Fade>
  );
}