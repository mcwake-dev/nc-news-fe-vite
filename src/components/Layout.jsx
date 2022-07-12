import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import SidebarArticleCard from "./articles/SidebarArticleCard";
import { highestVotedArticlesAtom } from "../atoms/articles.atom";

const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [highestArticles] = useAtom(highestVotedArticlesAtom);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="colour-bar"></span>
          <Link className="navbar-item" to="/">
            <i className="far fa-newspaper"></i>&nbsp;nc news.
          </Link>
          <button
            className={`navbar-burger ${menuActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className={`navbar-menu ${menuActive ? "is-active" : ""}`}>
          <div className="navbar-container">
            <div className="navbar-main">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link
                to="/author/all/topic/all/sort-by/created_at/order/desc"
                className="navbar-item"
              >
                Articles
              </Link>
              <Link to="/users" className="navbar-item">
                Users
              </Link>
            </div>
            <div className="navbar-auth">
              <Link to="/users/login" className="navbar-item">
                Login
              </Link>
              <Link to="/users/register" className="navbar-item">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="main">
        <section className="ml-2 columns">
          <div className="column is-four-fifths">
            <Outlet />
          </div>
          <div className="column is-one-fifth mt-5"></div>
        </section>
      </main>
      <footer className="main-footer">
        <div className="copyright">
          <span>Developed by Matthew C Wake</span>
        </div>
        <nav className="external">
          <a className="p-1" href="https://mcwake-portfolio.vercel.app">
            <i className="fab fa-react has-text-link"></i> Portfolio
          </a>
          <a className="p-1" href="https://github.com/mcwake-dev/nc-news">
            <i className="fa fa-github has-text-link"></i> Front-end Source
          </a>
          <a className="p-1" href="https://github.com/mcwake-dev">
            <i className="fa fa-github has-text-link"></i> Github
          </a>
          <a className="p-1" href="https://github.com/mcwake-dev/mcw-nc-news">
            <i className="fa fa-github has-text-link"></i> Backend Source
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Layout;
