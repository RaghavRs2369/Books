import BookShow from "./BookShow";
// Hooks
import useBooksContext from "../hooks/useBooks";

// -------------------------------------------------------

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
