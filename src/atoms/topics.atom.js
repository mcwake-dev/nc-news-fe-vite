import { atom } from "jotai";
import axios from "axios";

import { API } from "../api/constants";

const TOPICS_API = `${API}/topics`;

export const topicsAtom = atom(async () => axios.get(TOPICS_API));
