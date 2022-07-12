import { atom } from "jotai";
import axios from "axios";

import { API } from "../api/constants";
const GITHUB_URL = `${API}/github`;
const API_PROJECT = `${GITHUB_URL}/nc-news-api`;
const FE_PROJECT = `${GITHUB_URL}/nc-news-fe-vite`;

export const apiCommitsAtom = atom(async () => axios.get(API_PROJECT));

export const feCommitsAtom = atom(async () => axios.get(FE_PROJECT));
