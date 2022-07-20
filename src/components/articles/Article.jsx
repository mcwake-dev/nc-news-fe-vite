import { Suspense } from "react";
import { useAtom } from "jotai";

import { articleAtom } from "../../atoms/articles.atom";
import ArticleCard from "./ArticleCard";
import CommentList from "../comments/CommentList";
import LoadingText from "../common/LoadingText";

const Article = () => {
  const [articleResponse] = useAtom(articleAtom);
  const article = articleResponse.data.article;

  return (
    <Suspense fallback={<LoadingText />}>
      <ArticleCard article={article}>
        <CommentList />
      </ArticleCard>
    </Suspense>
  );
};

export default Article;
