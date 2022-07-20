import { Suspense } from "react";
import { useAtom } from "jotai";

import LoadingText from "../common/LoadingText";
import ArticleFilterGroup from "./ArticleFilterGroup";
import { VALID_ORDERS, VALID_SORTS } from "../../api/constants";
import { topicsAtom } from "../../atoms/topics.atom";
import { usersAtom } from "../../atoms/users.atom";

const ArticleControls = () => {
  const [users] = useAtom(usersAtom);
  const [topics] = useAtom(topicsAtom);
  const authorValues = [
    "all",
    ...users.data.users.map(({ username }) => username),
  ];
  const topicValues = ["all", ...topics.data.topics.map(({ slug }) => slug)];
  const sortValues = VALID_SORTS.map(({ param, title }) => {
    return [param, title];
  });
  const orderValues = VALID_ORDERS.map(({ param, title }) => {
    return [param, title];
  });

  return (
    <Suspense fallback={<LoadingText />}>
      <details>
        <summary>Sort &amp; Filter</summary>
        <section>
          <ArticleFilterGroup
            filterName={"author"}
            filterTitle={"Filter By Author:"}
            filterValues={authorValues}
            hasAllOption={true}
          />
          <ArticleFilterGroup
            filterName={"topic"}
            filterTitle={"Filter By Topic:"}
            filterValues={topicValues}
            hasAllOption={true}
          />
          <ArticleFilterGroup
            filterName={"sort"}
            filterTitle={"Sort By:"}
            filterValues={sortValues}
          />
          <ArticleFilterGroup
            filterName={"order"}
            filterTitle={"Order By:"}
            filterValues={orderValues}
          />
        </section>
      </details>
    </Suspense>
  );
};

export default ArticleControls;
