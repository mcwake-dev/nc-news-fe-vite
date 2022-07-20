import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { filtersAtom } from "../../atoms/articles.atom";
import VoteControls from "../forms/VoteControls";
import DeleteArticle from "./DeleteArticle";
import TopicButton from "../TopicButton";
import ArticleButton from "../ArticleButton";

const ArticleCard = ({
  article: {
    article_id,
    author,
    comment_count,
    created_at,
    title,
    topic,
    votes,
    body,
  },
  children,
}) => {
  const [filters, setFilters] = useAtom(filtersAtom);

  return (
    <>
      {children ? (
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link
                to={`/author/${filters.author}/topic/${filters.topic}/sort-by/${filters.sort_by}/order/${filters.order}`}
              >
                Articles
              </Link>
            </li>
            <li>
              <TopicButton topic={topic} />
            </li>
            <li>
              <ArticleButton articleId={article_id} articleTitle={title} />
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}

      <article className="article">
        <header>
          <div className="user-header">
            <div className="colour-bar"></div>
            <h3>
              <i className="fa fa-user"></i>{" "}
              {/* <SortAndFilterLink
                param={author}
                title={author}
                linkType={"author"}
              /> */}
            </h3>
            <h3>
              <i className="fa fa-calendar"></i>{" "}
              {`${dayjs(created_at).format("DD MMM YYYY")}`}
            </h3>
            <h3>
              <i className="fa fa-clock-o"></i>{" "}
              {`${dayjs(created_at).format("HH:mm")}`}
            </h3>
          </div>
          <h2 className="title">
            <ArticleButton articleId={article_id} articleTitle={title} />
          </h2>
        </header>
        <footer className="article-footer">
          {body ? (
            <VoteControls
              voteType={"article"}
              item_id={article_id}
              votes={votes}
            />
          ) : (
            <>
              <p>{votes} votes</p>
              <p>{comment_count} comments</p>
            </>
          )}
        </footer>

        <main>
          <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
          <DeleteArticle article_id={article_id} author={author} />
        </main>
        {body ? (
          <>
            <h2 className="subtitle mb-0">Comments</h2>
            {children}
          </>
        ) : (
          <></>
        )}
      </article>
    </>
  );
};

export default ArticleCard;
