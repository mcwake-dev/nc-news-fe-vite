import { atom } from "jotai";
import axios from "axios";

import { API } from "../api/constants";

const ARTICLES_API = `${API}/articles`;

export const highestVotedArticlesAtom = atom(async () =>
  axios.get(new URL(`${ARTICLES_API}/highest`))
);

export const filtersAtom = atom(["all", "all", "created_at", "desc"]);

export const articlesAtom = atom(async (get) => {
  const filterUrl = new URL(ARTICLES_API);
  const [author, topic, sort, order] = get(filtersAtom);

  if (author && author !== "all") {
    filterUrl.searchParams.append("author", author);
  }

  if (topic && topic !== "all") {
    filterUrl.searchParams.append("topic", topic);
  }

  if (sort) {
    filterUrl.searchParams.append("sort_by", sort);
  }

  if (order) {
    filterUrl.searchParams.append("order", order);
  }

  return axios.get(filterUrl);
});
