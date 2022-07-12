import axios from "axios";
import { atom } from "jotai";

import { API } from "../api/constants";

const USERS_API = `${API}/users`;

export const userAtom = atom(null);

export const usersAtom = atom(async () => axios.get(new URL(USERS_API)));

export const userExistsAtom = atom(async (get) =>
  axios.get(new URL(`${USERS_API}/exists${get(userAtom)}`))
);
