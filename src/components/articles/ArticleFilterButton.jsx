import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import { filtersAtom } from "../../atoms/articles.atom";

const ArticleFilterButton = ({ filterName, filterValue, filterTitle }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useAtom(filtersAtom);

  const updateFilter = () => {
    const updatedFilters = { ...filters, [filterName]: filterValue };

    setFilters(updatedFilters);
    navigate(
      `/author/${updatedFilters.author}/topic/${updatedFilters.topic}/sort-by/${updatedFilters.sort_by}/order/${updatedFilters.order}`
    );
  };

  return (
    <button
      onClick={(ev) => {
        updateFilter();
      }}
    >
      {filterTitle}
    </button>
  );
};

export default ArticleFilterButton;
