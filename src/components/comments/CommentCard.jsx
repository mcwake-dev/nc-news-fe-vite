import * as dayjs from "dayjs";

import VoteControls from "../forms/VoteControls";
import DeleteComment from "./DeleteComment";

const CommentCard = ({
  comment: { author, body, comment_id, created_at, votes },
  setComments,
}) => {
  return (
    <article className="notification is-primary is-light">
      <h3 className="is-size-5">
        Posted by {author}
        on{" "}
        {`${dayjs(created_at).format("ddd D MMM YYYY")} at ${dayjs(
          created_at
        ).format("HH:mm")}`}{" "}
      </h3>
      <VoteControls item_id={comment_id} votes={votes} voteType={"comment"} />
      <main>{body}</main>
      <footer>
        <DeleteComment
          comment_id={comment_id}
          author={author}
          setComments={setComments}
        />
      </footer>
    </article>
  );
};

export default CommentCard;
