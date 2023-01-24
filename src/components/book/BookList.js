import { Link } from 'react-router-dom';
import Book from '../../components/book/Book';
import { useBooks } from '../../hooks/useBooks';
import BookDetail from './BookDetail.js';

function BookList({ book }) {
  const { error, loading, books } = useBooks();
  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h1>Loading books...</h1>;
  return (
    <ul className="book-list" aria-label="book list">
      {books.map((book) => (
        <li key={book.book_id}>
          <Book key={book.id} book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
