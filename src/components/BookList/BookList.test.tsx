const books = [
  {
    id: 1,
    title: "Automate the Boring Stuff with Python",
    description:
      "The bestselling introduction to Python programming, revised to include the latest Python features, improved explanations, and new chapters about databases and sound files.",
    imageUrl: "https://m.media-amazon.com/images/I/71Mlebvs7IL._SY425_.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits: The life-changing million-copy",
    description:
      "People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.",
    // test missing imageUrl
  },
  {
    id: 3,
    title:
      "Fluent React: Build Fast, Performant, and Intuitive Web Applications",
    description:
      "When it comes to building user interfaces on the web, React enables web developers to unlock a new world of possibilities. This practical book helps you take a deep dive into fundamental concepts of this JavaScript library, including JSX syntax and advanced patterns, the virtual DOM, React reconciliation, and advanced optimization techniques. By becoming fluent in React, you'll quickly learn how to build better web applications.",
    imageUrl: "https://media-amazon.com/images/I/71LeIRBPrtL._SY385_.jpg", // test broken imageUrl
  },
  {
    id: 4,
    title: "Learning Python: Powerful Object-Oriented Programming",
    description:
      "Get a comprehensive, in-depth introduction to the core Python language with this hands-on book. Based on author Mark Lutz's popular training course, this updated sixth edition will help you quickly write efficient, high-quality code with Python. It's an ideal way to begin, whether you're new to programming or a professional developer versed in other languages.",
    imageUrl: "https://m.media-amazon.com/images/I/81uCXHuaHfL._AC_UY218_.jpg",
  },
  {
    id: 5,
    title:
      "Effective TypeScript: 83 Specific Ways to Improve Your TypeScriptTypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively takes time and practice. Using the format popularized by Effective C++ and Effective Java (both Addison-Wesley), this practical book features 83 items that give specific advice on what to do and what not to do, and how to think about the language.",
    description:
      "When it comes to building user interfaces on the web, React enables web developers to unlock a new world of possibilities. This practical book helps you take a deep dive into fundamental concepts of this JavaScript library, including JSX syntax and advanced patterns, the virtual DOM, React reconciliation, and advanced optimization techniques. By becoming fluent in React, you'll quickly learn how to build better web applications.",
    imageUrl: "https://m.media-amazon.com/images/I/71eWL4AqPqL._SY385_.jpg",
  },
  {
    id: 6,
    title: "FastAPI: Modern Python Web Development",
    description:
      "FastAPI is a young yet solid framework that takes advantage of newer Python features in a clean design. As its name implies, FastAPI is indeed fast, rivaling similar frameworks in languages such as Golang. With this practical book, developers familiar with Python will learn how FastAPI lets you accomplish more in less time with less code.",
    imageUrl:
      "https://m.media-amazon.com/images/I/415Au+4j3sL._SY445_SX342_ControlCacheEqualizer_.jpg",
  },
];

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

describe("BookList Component", () => {
  beforeEach(() => {
    render(<BookList books={books} />);
  });

  it("renders the correct number of BookCard components", () => {
    const bookCards = screen.getAllByRole("listitem");
    expect(bookCards).toHaveLength(books.length);
  });
});
