import { useAtom } from "jotai";

import SidebarArticleList from "./SidebarArticleList";
import { highestVotedArticlesAtom } from "../../atoms/articles.atom";

export default function HighestVotedArticles() {
  const [highestArticles] = useAtom(highestVotedArticlesAtom);

  return {
    /* <SidebarArticleList
        title={"Highest Voted Articles"}
        articles={highestArticles}
      /> */
  };
}
