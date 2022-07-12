import { atom } from "jotai";
import axios from "axios";

import { API } from "../api/constants";

const ARTICLES_API = `${API}/articles`;

export const highestVotedArticlesAtom = atom(async () =>
  axios.get(new URL(`${ARTICLES_API}/highest`))
);
