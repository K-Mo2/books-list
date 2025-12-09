import { BookCard } from "../BookCard";
import styles from "./BookList.module.css";

interface BookListProps {
  books: BookCard[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <li className={styles.bookListItem} key={book.id}>
          <BookCard key={book.id} book={book} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
