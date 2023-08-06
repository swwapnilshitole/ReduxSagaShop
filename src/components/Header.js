// Import necessary modules from React Native and React.
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

// Import 'useSelector' hook from 'react-redux' to access data from the Redux store.
import {useSelector} from 'react-redux';

// Create a functional component named 'Header'.
const Header = () => {
  // Access the 'cart' data from the Redux store using the 'useSelector' hook.
  const cartData = useSelector(state => state.cart);

  // Define a state variable 'cartItems' and a setter function 'setCartItems' using the 'useState' hook.
  const [cartItems, setCartItems] = useState(0);

  // Use the 'useEffect' hook to update 'cartItems' whenever the 'cartData' changes.
  useEffect(() => {
    // Set the 'cartItems' to the length of 'cartData' to display the number of items in the cart.
    setCartItems(cartData.length);
  }, [cartData]);

  // Render the UI for the 'Header' component.
  return (
    // Create a 'View' container to hold the header elements.
    <View style={styles.Container}>
      {/* Display the text "Items in Cart:" */}
      <Text style={styles.Text}>Items in Cart:</Text>
      {/* Display the number of items in the cart using the 'cartItems' state. */}
      <Text style={styles.Text}>{cartItems}</Text>
    </View>
  );
};

// Define the 'styles' object using 'StyleSheet.create' to hold the CSS-like styles for the component.
const styles = StyleSheet.create({
  // 'Container' style for the main container holding the header elements.
  Container: {
    flexDirection: 'row', // Elements inside the container will be displayed in a row.
    alignItems: 'center', // Align elements vertically at the center of the container.
    justifyContent: 'space-between', // Space elements evenly along the main axis.
    backgroundColor: '#fe9c54', // Set the background color to a shade of orange (#fe9c54).
    padding: 5, // Add 5 units of padding around the container.
    width: '100%', // Set the width of the container to 100% of its parent.
  },
  // 'Text' style for the text elements inside the container.
  Text: {
    fontSize: 30, // Set the font size to 30.
    color: 'grey', // Set the text color to grey.
  },
});

// Export the 'Header' component as the default export for use in other parts of the application.
export default Header;
