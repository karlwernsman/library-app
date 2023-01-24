import { Link, useParams } from 'react-router-dom';
import Author from '../author/Author';
import './Book.css';

function Book({
  book: {
    title,
    total_pages: totalPages,
    rating,
    isbn,
    published_date: publishedDate,
    authors,
    book_id,
  },
  showDetail = false,
}) {
  return (
    <article className="book">
      <Link to={`/books/${book_id}`}>
        <h3>{title}</h3>
      </Link>
      <address>
        {authors.map((author) => (
          <Author key={author.author_id} author={author} />
        ))}
      </address>
      {showDetail && (
        <>
          <p>Rating: {rating}</p>
          <p>ISBN: {isbn}</p>
          <p>Published {publishedDate}</p>
          <p>{totalPages} pages</p>
        </>
      )}
    </article>
  );
}

export default Book;
