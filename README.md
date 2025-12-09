# Book List Application

A reusable React component system for displaying and managing a collection of books. Built as part of a technical assessment demonstrating modern React development practices, testing, and accessibility standards.

## Features

### Core Functionality

- **Book Display**: Each book card shows a title, optional description, and optional image
- **Toggle Description**: Interactive toggle to show/hide book descriptions
- **Add New Books**: Dynamic button to add new books to the list with automatic updates
- **Error Handling**: Graceful handling of invalid image URLs with placeholder messaging
- **Responsive Design**: Clean, accessible UI that works across different screen sizes

### Technical Highlights

- ✅ Reusable component architecture
- ✅ TypeScript for type safety
- ✅ React state management with hooks
- ✅ Comprehensive test coverage with React Testing Library
- ✅ WCAG accessibility compliance
- ✅ Modern CSS modules for styling
- ✅ Production-ready code structure

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **Yarn** (v1.22 or higher)

To check if you have these installed:

```bash
node --version
yarn --version
```

If you need to install Yarn:

```bash
npm install -g yarn
```

## Installation

1. **Clone or download the project**

   ```bash
   cd books-list
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

## Running the Application

### Development Mode

Start the development server with hot reloading:

```bash
yarn start
```

The application will open automatically in your browser at [http://localhost:5173/](http://localhost:5173/)

### Production Build

Create an optimized production build:

```bash
yarn build
```

The build artifacts will be stored in the `build/` directory.

## Testing

### Run All Tests

Execute the complete test suite:

```bash
yarn test
```

### Run Tests with Verbose Output

See detailed test results:

```bash
yarn test --verbose
```

## Component Usage

### BookCard Component

The `BookCard` component is a reusable card that displays individual book information.

**Props:**

- `title` (string, required): The book's title
- `description` (string): The book's description
- `imageUrl` (string, optional): URL to the book's cover image

## Key Features Explained

### 1. Toggle Description

Each book card includes a "Show/Hide Details" button that toggles the visibility of the book's description, demonstrating React state management.

### 2. Add New Book

The "Add New Book" button generates a new book with randomized sample data and adds it to the list, showcasing dynamic list updates.

### 3. Image Error Handling

If an image URL is invalid or fails to load, the component displays a user-friendly "Invalid Image URL" message instead of a broken image.

### 4. Accessibility (WCAG Compliance)

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text for images

## Testing Strategy

The application includes comprehensive tests covering:

- **Component Rendering**: Ensures components render correctly with various prop combinations
- **State Management**: Verifies toggle functionality and state updates
- **User Interactions**: Tests button clicks and dynamic list updates
- **Error Handling**: Validates graceful handling of invalid image URLs
- **Edge Cases**: Tests missing props and empty states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Practices

This project follows modern React development standards:

- **TypeScript**: Strong typing for better code quality and developer experience
- **Component Composition**: Modular, reusable components
- **CSS Modules**: Scoped styling to prevent conflicts
- **Testing**: Test-driven approach with high coverage
- **Accessibility**: WCAG 2.1 AA compliance
- **Clean Code**: ESLint and Prettier for consistent formatting

## Troubleshooting

### Dependencies Issues

Clear cache and reinstall:

```bash
yarn cache clean
rm -rf node_modules yarn.lock
yarn install
```

## Scripts Reference

| Command      | Description               |
| ------------ | ------------------------- |
| `yarn start` | Starts development server |
| `yarn build` | Creates production build  |
| `yarn test`  | Runs test suite           |

**Built with React, TypeScript, and ❤️**
