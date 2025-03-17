import AddArticle from "./addarticle";
import ArticleList from "./articlelist";
import Controller123 from "./controllerpart";

export default function MVCExmp() {
  return (
    <section>
      <Controller123
        addArticle={({
          title,
          summary,
          onChangeTitle,
          onChangeSummary,
          onClickAdd,
        }) => (
          <AddArticle
            title={title}
            summary={summary}
            onChangeTitle={onChangeTitle}
            onChangeSummary={onChangeSummary}
            onClickAdd={onClickAdd}
          />
        )}
        articleList={({ articles, onClickToggle, onClickRemove }) => (
          <ArticleList
            articles={articles}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        )}
      />
    </section>
  );
}
