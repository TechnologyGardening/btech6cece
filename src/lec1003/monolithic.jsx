import * as React from "react";
const id = (function* () {
  let i = 1;
  while (true) {
    yield i++;
  }
})();

class Monolithic extends React.Component {
  state = {
    articles: [
      { id: id.next(), title: "Title1", summary: "Summary1", display: "none" },
      { id: id.next(), title: "Title2", summary: "Summary2", display: "none" },
      { id: id.next(), title: "Title3", summary: "Summary3", display: "none" },
      { id: id.next(), title: "Title4", summary: "Summary4", display: "none" },
    ],
    title: "",
    summary: "",
  };
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeSummary = (e) => {
    this.setState({ summary: e.target.value });
  };
  onClickToggle = (id) => {
    this.setState((state) => {
      const articles = [...state.articles];
      const index = articles.findIndex((article) => article.id === id);
      articles[index] = {
        ...articles[index],
        display: state.articles[index].display ? "" : "none",
      };
      return { ...state, articles };
    });
  };
  onClickRemove = (id) => {
    this.setState((state) => ({
      ...state,
      articles: state.articles.filter((i) => i.id != id),
    }));
  };
  onClickAdd = () => {
    this.setState((state) => ({
      articles: [
        {
          id: id.next(),
          title: state.title,
          summary: state.summary,
          display: "none",
        },
        ...state.articles,
      ],
      title: "",
      summary: "",
    }));
  };
  render() {
    const { articles, title, summary } = this.state;
    return (
      <>
        <input value={title} onChange={this.onChangeTitle} />
        <input value={summary} onChange={this.onChangeSummary} />
        <button onClick={this.onClickAdd}>ADD</button>
        <br />
        <ul>
          {articles.map((i) => (
            <li key={i.id}>
              {" "}
              <a
                href={`#${i.id}`}
                onClick={this.onClickToggle.bind(null, i.id)}
              >
                {" "}
                {i.title}
              </a>
              <a
                href={`#${i.id}`}
                onClick={this.onClickRemove.bind(null, i.id)}
              >
                {"1 "}
                Remove
              </a>
              <p style={{ display: i.display }}> {i.summary}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Monolithic;
