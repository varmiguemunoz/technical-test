import booksList from "../utils/books.json";

export default function Books() {
  const { library } = booksList;

  return (
    <div>
      {library.map(({ book }) => {
        return <h1>{book.title}</h1>;
      })}
    </div>
  );
}
