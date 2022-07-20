import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { filtersAtom } from "../atoms/articles.atom";

const TopicButton = ({ topic }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useAtom(filtersAtom);

  return (
    <button
      onClick={(ev) => {
        const updatedFilters = { ...filters, author: "all", topic };

        setFilters(updatedFilters);
        navigate(
          `/author/${filters.author}/topic/${filters.topic}/sort-by/${filters.sort_by}/order/${filters.order}`
        );
      }}
    >
      {topic}
    </button>
  );
};

export default TopicButton;
