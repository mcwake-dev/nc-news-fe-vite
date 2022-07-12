export default function SidebarArticleCard({ article_id, author, title }) {
  return (
    <article key={article_id} className="mb-4">
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <br />
      By <b>{author}</b>
    </article>
  );
}
