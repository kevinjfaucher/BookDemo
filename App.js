// Importing necessary libraries and modules
import React, { Component } from 'react'; // Importing React and Component to enable creation of component
import { View } from 'react-native'; // Importing View, a container component from react-native
import BookForm from './components/BookForm'; // Importing BookForm component for rendering and functionality of the form
import BookList from './components/BookList'; // Importing BookList component for rendering the list of books
import styles from './styles/styles'; // Importing styles for applying styling to components

// Defining and exporting default App component
export default class App extends Component {

  // Constructor is a special function used for initializing state and binding methods
  constructor(props) {
    super(props); // Calling the constructor of parent class Component with props
    // Initializing the state with an empty array of books
    this.state = {
      books: [],
    };
  }

  // Method to add a new book to the state
  addBook = (newBook) => {
    // Retrieving the current list of books from the state
    const currentBooks = this.state.books;
    // Creating a new list of books by concatenating the new book to the current list of books
    const newBooksList = currentBooks.concat(newBook);
    // Updating the state with the new list of books, triggering a re-render with the updated data
    this.setState({
      books: newBooksList
    });
  };

  // Render method returns the JSX that represents how a component should appear
  render() {
    // Rendering a View containing BookForm and BookList components
    return (
        <View style={styles.container}>
          {/*
          Rendering BookForm component and passing addBook method as a prop.
          This allows BookForm component to call addBook method and add a new book to the state
          */}
          <BookForm addBook={this.addBook} />

          {/*
          Rendering BookList component and passing books array from the state as a prop.
          This allows BookList component to receive the list of books and render it
          */}
          <BookList books={this.state.books} />
        </View>
    );
  }
}

// End of App component
