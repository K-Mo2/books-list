import { type FC, useState } from "react";
import styles from "./BookCard.module.css";

export interface BookCard {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface BookCardProps {
  book: BookCard;
}

export const BookCard: FC<BookCardProps> = ({ book }: BookCardProps) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isValidImgURL, setIsValidImgURL] = useState(true);
  const descriptionId = `description-${book.id}`;

  return (
    <>
      <div className={styles.bookCard}>
        <div className={styles.imageContainer}>
          {isValidImgURL ? (
            <img
              src={book.imageUrl ?? "https://placehold.co/300x400"}
              alt={
                book.imageUrl
                  ? "Book cover of " + book.title
                  : "Placeholder book cover"
              }
              className={styles.bookImage}
              onError={() => setIsValidImgURL(false)}
            />
          ) : (
            <p className={styles.invalidImageURL}>Invalid Image URL</p>
          )}
        </div>
        <div className={styles.titleContainer}>
          <h3>{book.title || "Undefined title"}</h3>
        </div>
        <div className={styles.descriptionContainer}>
          <button
            onClick={() => setDescriptionVisible(!isDescriptionVisible)}
            aria-expanded={isDescriptionVisible}
            aria-controls={descriptionId}
            aria-label="Toggle book description visibility"
            className={styles.toggleButton}
          >
            {isDescriptionVisible ? "Hide Description" : "Show Description"}
          </button>
          {isDescriptionVisible && (
            <p
              id={descriptionId}
              className={styles.descriptionText}
              aria-label="Book description"
            >
              {book.description || "Undefined description"}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookCard;
