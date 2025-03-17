/* eslint-disable react/prop-types */
import { useState } from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();
export default function Controller123({ addArticle, articleList }) {
  const [articles, setArticles] = useState([
    { id: id.next(), title: "Title1", summary: "Summary1", display: "none" },
    { id: id.next(), title: "Title2", summary: "Summary2", display: "none" },
    { id: id.next(), title: "Title3", summary: "Summary3", display: "none" },
    { id: id.next(), title: "Title4", summary: "Summary4", display: "none" },
  ]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangeSummary(e) {
    setSummary(e.target.value);
  }
  function onClickAdd() {
    setArticles([
      ...articles,
      {
        id: id.next(),
        title,
        summary,
        display: "none",
      },
    ]);
    setSummary("");
    setTitle("");
  }
  function onClickToggle(id) {
    const index = articles.findIndex((i) => i.id === id);
    const updatedarticles = [...articles];
    updatedarticles[index] = {
      ...articles[index],
      display: articles[index].display ? "none" : "",
    };
    setArticles(updatedarticles);
  }
  function onClickRemove(id) {
    setArticles(articles.filter((i) => i.id !== id));
  }

  return (
    <section>
      {addArticle({
        title,
        summary,
        onChangeTitle,
        onChangeSummary,
        onClickAdd,
      })}{" "}
      {articleList({
        articles,
        onClickToggle,
        onClickRemove,
      })}
    </section>
  );
}
