/* eslint-disable react/prop-types */
import ArticleItem from "./articleitem";
export default function ArticleList({
  articles,
  onClickToggle,
  onClickRemove,
}) {
  return (
    <ul>
      {articles.map((i) => (
        <ArticleItem
          key={i.id}
          article={i}
          onClickToggle={onClickToggle}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
