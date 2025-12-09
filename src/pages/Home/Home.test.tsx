import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

describe("AddBookButton Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the add book button", () => {
    const addBookButton = screen.getByRole("button", { name: /add books/i });
    expect(addBookButton).toBeInTheDocument();
  });

  it("increases the book count when the add book button is clicked", async () => {
    const addBookButton = screen.getByRole("button", { name: /add books/i });
    const initialBookCards = screen.getAllByRole("listitem");
    const initialCount = initialBookCards.length;
    const user = userEvent.setup();

    await user.click(addBookButton);

    const updatedBookCards = screen.getAllByRole("listitem");
    const updatedCount = updatedBookCards.length;

    expect(updatedCount).toBe(initialCount + 1);
  });
});
