/* eslint-disable react/prop-types */
export default function AddArticle({
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <section>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="Title"
      />
      <input
        type="text"
        value={summary}
        onChange={onChangeSummary}
        placeholder="Summary"
      />
      <button onClick={onClickAdd}>Add</button>
    </section>
  );
}
