import { Link } from "react-router-dom";

const Home = () => {
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
        <Link to="/author/all/topic/all/sort-by/created_at/order/desc">
          To the Articles!
        </Link>
      </section>
      <section className="github-container">
        <h3>API Updates</h3>
      </section>
      <section className="github-container">
        <h3>Front-End Updates</h3>
      </section>
    </section>
  );
};

export default Home;
