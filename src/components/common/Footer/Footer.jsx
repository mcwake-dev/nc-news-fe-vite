import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      <span>Developed by Matthew C Wake</span>
    </div>
    <nav className={styles.external}>
      <a href="https://mcwake-portfolio.vercel.app">
        <i className="fab fa-react has-text-link"></i> Portfolio
      </a>
      <a href="https://github.com/mcwake-dev/nc-news">
        <i className="fa fa-github has-text-link"></i> Front-end Source
      </a>
      <a href="https://github.com/mcwake-dev">
        <i className="fa fa-github has-text-link"></i> Github
      </a>
      <a href="https://github.com/mcwake-dev/mcw-nc-news">
        <i className="fa fa-github has-text-link"></i> Backend Source
      </a>
    </nav>
  </footer>
);

export default Footer;
