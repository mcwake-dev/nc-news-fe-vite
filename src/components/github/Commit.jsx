import dayjs from "dayjs";

const Commit = ({ pubDate, title }) => {
  return (
    <article className="commit">
      <i className="fa fa-github"></i>
      <time dateTime={pubDate}>{dayjs(pubDate).format("DD-MM-YY HH:mm")}</time>
      <header>{title}</header>
    </article>
  );
};

export default Commit;
