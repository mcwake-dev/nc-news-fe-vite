import { Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import { Suspense } from "react";

import Layout from "./common/Layout";
import ArticleList from "./articles/ArticleList";
import Article from "./articles/Article";
import NewArticle from "./articles/NewArticle";
import UserList from "./users/UserList";
import NotFound from "./NotFound";
import Home from "./Home";
import Login from "./users/Login";
import Logout from "./users/Logout";
import Register from "./users/Register";
import LoadingText from "./common/LoadingText";

function App() {
  return (
    <Provider>
      <Suspense fallback={<LoadingText />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/articles">
              <Route path="" element={<ArticleList />} />
              <Route path="new" element={<NewArticle />} />
              <Route path=":article_id" element={<Article />} />
            </Route>
            <Route path="/users">
              <Route path="" element={<UserList />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Provider>
  );
}

export default App;
