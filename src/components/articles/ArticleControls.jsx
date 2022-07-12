import { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";

import LoadingText from "../LoadingText";
import { VALID_ORDERS, VALID_SORTS } from "../../api/constants";
import { topicsAtom } from "../../atoms/topics.atom";
import { usersAtom } from "../../atoms/users.atom";
import SortAndFilterLink from "../SortAndFilterLink";
import { getUsers } from "../../api/users";

const ArticleControls = () => {
  const { author, topic, sort, order } = useParams();
  const [users] = useAtom(usersAtom);
  const [topics] = useAtom(topicsAtom);

  return (
    <Suspense fallback={<LoadingText />}>
      <details>
        <summary>Sort &amp; Filter</summary>
        <div>
          <div>
            <h4>Filter by author: </h4>
            <div>
              <SortAndFilterLink
                key={"all"}
                isCurrent={author === "all"}
                title="All"
                param={"all"}
                linkType={"author"}
              />
              {users.data.users.map(({ username }) => (
                <SortAndFilterLink
                  key={username}
                  isCurrent={author === username}
                  title={username}
                  param={username}
                  linkType={"author"}
                />
              ))}
            </div>
          </div>
          <div>
            <h4>Filter by topic: </h4>
            <div>
              <SortAndFilterLink
                key={"all"}
                isCurrent={topic === "all"}
                title="All"
                param={"all"}
                linkType={"topic"}
              />

              {topics.data.topics.map(({ slug }) => (
                <SortAndFilterLink
                  key={slug}
                  title={slug}
                  isCurrent={topic === slug}
                  param={slug}
                  linkType={"topic"}
                />
              ))}
            </div>
          </div>
          <div>
            <h4>Sort by: </h4>
            <div>
              {VALID_SORTS.map((sortOption) => (
                <SortAndFilterLink
                  key={sortOption.param}
                  title={sortOption.title}
                  isCurrent={sortOption.param === sort}
                  param={sortOption.param}
                  linkType={"sort"}
                />
              ))}
            </div>
          </div>
          <div>
            <h4>Order by: </h4>
            <div>
              {VALID_ORDERS.map((orderOption) => (
                <SortAndFilterLink
                  key={orderOption.param}
                  title={orderOption.title}
                  isCurrent={orderOption.param === order}
                  param={orderOption.param}
                  linkType={"order"}
                />
              ))}
            </div>
          </div>
        </div>
      </details>
    </Suspense>
  );
};

export default ArticleControls;
