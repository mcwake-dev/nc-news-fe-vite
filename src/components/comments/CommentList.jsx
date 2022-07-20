import { Suspense } from "react";
import { useAtom } from "jotai";

import CommentCard from "./CommentCard";
import LoadingText from "../common/LoadingText";
import CommentForm from "./CommentForm";
import { articleCommentsAtom } from "../../atoms/articles.atom";

const CommentList = () => {
  const [commentsResponse] = useAtom(articleCommentsAtom);
  const comments = commentsResponse.data.comments;

  return (
    <Suspense fallback={<LoadingText />}>
      <section>
        <CommentForm comments={comments} />
      </section>
      <section>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </section>
    </Suspense>
  );
};

export default CommentList;
