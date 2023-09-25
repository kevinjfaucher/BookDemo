// Importing necessary components and libraries
import React from 'react'; // The base React library is imported, allowing the creation of React components.
import { View, Text } from 'react-native'; // Importing the 'View' and 'Text' components from 'react-native'.
import styles from '../styles/styles'; // Importing a styles object which presumably contains the styling information for the component.

// Defining the Functional Component: BookList
// 'BookList' is a functional component that takes a 'books' prop and displays them in a list.
const BookList = ({ books }) => { // 'books' is a prop passed to this component, expected to be an array of book objects.

    // Returning JSX for Rendering
    // The returned JSX is what gets rendered on the screen when this component is used.
    return (
        <View style={styles.list}>
            <Text>Books in Library:</Text>
            {
                // Using the map function on the 'books' array
                // The 'map' function is a higher-order function that creates a new array by applying a specified function to each element of the existing array.
                // Here, 'map' is used to transform each 'book' object in the 'books' array into a 'Text' component.
                books.map((book, index) => (
                    // For each 'book' in the 'books' array, the 'map' function creates a new 'Text' component.
                    // The 'index' is the position of the 'book' in the 'books' array, used here as a key for each 'Text' component.
                    // The 'key' prop is important for uniquely identifying each component in a list, aiding React in efficient DOM manipulations.
                    <Text key={index}>
                        {book.title} by {book.author} - {book.genre}
                    </Text>
                    // The 'map' function ultimately results in a new array of 'Text' components,
                    // each representing a book and being displayed as part of the rendered component.
                ))
            }
        </View>
    );
}

// Exporting the BookList Component
// This makes the component importable by other files in the project.
export default BookList;
