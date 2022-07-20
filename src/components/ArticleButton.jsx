import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { articleIdAtom } from "../atoms/articles.atom";

const ArticleButton = ({ articleId, articleTitle }) => {
  const navigate = useNavigate();
  const [, setArticleId] = useAtom(articleIdAtom);

  return (
    <button
      onClick={(ev) => {
        setArticleId(articleId);
        navigate(`/articles/${articleId}`);
      }}
    >
      {articleTitle}
    </button>
  );
};

export default ArticleButton;
