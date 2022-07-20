import ArticleFilterButton from "./ArticleFilterButton";
const PARAM = 0;
const TITLE = 1;

const ArticleFilterGroup = ({ filterName, filterTitle, filterValues }) => {
  return (
    <section>
      <h4>{filterTitle}</h4>
      <ul>
        {filterValues.map((value) => {
          const filterValue = Array.isArray(value) ? value[PARAM] : value;
          const title = Array.isArray(value) ? value[TITLE] : value;

          return (
            <ArticleFilterButton
              key={`${filterName}-${filterValue}`}
              filterName={filterName}
              filterValue={filterValue}
              filterTitle={title}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleFilterGroup;
