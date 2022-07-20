import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { apiCommitsAtom, feCommitsAtom } from "../atoms/github.atom";
import Commit from "./github/Commit";

const Home = () => {
  const [apiCommits] = useAtom(apiCommitsAtom);
  const [feCommits] = useAtom(feCommitsAtom);

  return (
    <section className="home">
      <section className="blurb">
        <h2>nc news.</h2>
        <h3>A Reddit-like news site demonstrating:</h3>
        <div className="content">
          <ul>
            <li>
              A modern React-powered front end using Jotai for state management
            </li>
            <li>Responsive UI using HTML5 and CSS3</li>
            <li>Interaction with a Node.js/PostgreSQL REST API</li>
          </ul>
        </div>
        <Link to="/articles">To the Articles!</Link>
      </section>
      <section className="github-container">
        <h3>API Updates</h3>
        {apiCommits.data.feed.map(({ pubDate, title, link }) => (
          <Commit pubDate={pubDate} title={title} key={link} />
        ))}
        <a href="https://github.com/mcwake-dev/nc-news-api">
          <i className="fa fa-github"></i> View on Github
        </a>
      </section>
      <section className="github-container">
        <h3>Front-End Updates</h3>
        {feCommits.data.feed.map(({ pubDate, title, link }) => (
          <Commit pubDate={pubDate} title={title} key={link} />
        ))}
        <a href="https://github.com/mcwake-dev/nc-news-fe-vite">
          <i className="fa fa-github"></i> View on Github
        </a>
      </section>
    </section>
  );
};

export default Home;
