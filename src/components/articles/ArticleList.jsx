import { Suspense } from "react";
import { useAtom } from "jotai";

import { articlesAtom } from "../../atoms/articles.atom";
import LoadingText from "../common/LoadingText";
import ArticleCard from "./ArticleCard";
import ArticleControls from "./ArticleControls";

const ArticleList = () => {
  const [articles] = useAtom(articlesAtom);

  return (
    <Suspense fallback={<LoadingText />}>
      <ArticleControls />
      <div>
        {articles.data.articles.map((article) => (
          <ArticleCard
            article={article}
            key={`article-${article.article_id}`}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default ArticleList;
