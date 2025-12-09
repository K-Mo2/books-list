import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookCard from "./BookCard";
import userEvent from "@testing-library/user-event";

const book1 = {
  id: 1,
  title: "Automate the Boring Stuff with Python",
  description:
    "The bestselling introduction to Python programming, revised to include the latest Python features, improved explanations, and new chapters about databases and sound files.",
  imageUrl: "https://m.media-amazon.com/images/I/71Mlebvs7IL._SY425_.jpg",
};

const book2 = {
  id: 2,
  title: "Automate the Boring Stuff with Python",
  description:
    "The bestselling introduction to Python programming, revised to include the latest Python features, improved explanations, and new chapters about databases and sound files.",
  imageUrl: "https://media-amazon.com/images/I/71Mlebvs7IL._SY425_.jpg",
};

describe("Valid BookCard Component", () => {
  beforeEach(() => {
    render(<BookCard book={book1} />);
  });

  it("renders the book title", () => {
    const titleElement = screen.getByText(book1.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the book description if toggled on", async () => {
    const showDescriptionButton = screen.getByRole("button", {
      name: /Toggle book description visibility/i,
    });
    const user = userEvent.setup();
    await user.click(showDescriptionButton);
    const descriptionElement = screen.getByText(book1.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders the book image", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", book1.imageUrl);
    expect(imageElement).toHaveAttribute("alt", "Book cover of " + book1.title);
  });
});

describe("Invalid BookCard Component", () => {
  beforeEach(() => {
    render(<BookCard book={book2} />);
  });

  it("shows 'Invalid Image URL' message for broken image URL", async () => {
    const imageElement = screen.getByRole("img");
    // Simulate image load error
    await userEvent.unhover(imageElement); // Trigger onError
    await act(async () => {
      imageElement.dispatchEvent(new Event("error"));
    });
    const invalidImageMessage = await screen.findByText("Invalid Image URL");
    expect(invalidImageMessage).toBeInTheDocument();
  });
});
