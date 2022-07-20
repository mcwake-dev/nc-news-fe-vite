import { atom } from "jotai";
import axios from "axios";

import { API } from "../api/constants";

const ARTICLES_API = `${API}/articles`;

export const filtersAtom = atom({
  author: "all",
  topic: "all",
  sort_by: "created_at",
  order: "desc",
});

export const articlesAtom = atom(async (get) => {
  const filterUrl = new URL(ARTICLES_API);
  const { author, topic, sort, order } = get(filtersAtom);

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

export const articleIdAtom = atom();

export const articleAtom = atom(async (get) => {
  const articleId = get(articleIdAtom);

  if (articleId) {
    return axios.get(`${ARTICLES_API}/${articleId}`);
  }

  return {};
});

export const articleCommentsAtom = atom(async (get) => {
  const articleId = get(articleIdAtom);

  if (articleId) {
    return axios.get(`${ARTICLES_API}/${articleId}/comments`);
  }
  return [];
});
