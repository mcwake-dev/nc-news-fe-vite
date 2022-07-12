import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import { articlesAtom } from "../../atoms/articles.atom";
import LoadingText from "../LoadingText";
import ArticleCard from "./ArticleCard";
import ArticleControls from "./ArticleControls";

const ArticleList = () => {
  const [articles] = useAtom(articlesAtom);

  return (
    <Suspense fallback={<LoadingText />}>
      <ArticleControls />
      <div>
        {articles.data.articles.map((article) => (
          <Link key={article.article_id} to={`/articles/${article.article_id}`}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default ArticleList;
