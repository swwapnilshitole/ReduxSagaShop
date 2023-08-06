// Import necessary modules from React Native and React.
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

// Import 'useDispatch' and 'useSelector' hooks from 'react-redux' to interact with the Redux store.
import {useDispatch, useSelector} from 'react-redux';

// Import the 'addTocart' and 'removeFromCart' actions from the Redux action file.
import {addTocart, removeFromCart} from '../redux/action';

// Create a functional component named 'Product', which receives 'props' as an argument.
const Product = props => {
  // Destructure the 'item' prop from the 'props' object.
  const item = props.item;

  // Access the 'dispatch' function from the Redux store using the 'useDispatch' hook.
  const dispatch = useDispatch();

  // Access the 'cart' data from the Redux store using the 'useSelector' hook.
  const cartItems = useSelector(state => state.cart);

  // Define a state variable 'isAdded' and a setter function 'setIsAdded' using the 'useState' hook.
  const [isAdded, setIsAdded] = useState(false);

  // Define a function to handle adding the item to the cart.
  const handleAddTocart = item => {
    // Dispatch the 'addTocart' action with the 'item' data as payload to add it to the cart.
    dispatch(addTocart(item));
  };

  // Define a function to handle removing the item from the cart.
  const handleRemoveFromCart = item => {
    // Dispatch the 'removeFromCart' action with the 'item.id' as payload to remove it from the cart.
    dispatch(removeFromCart(item.id));
  };

  // Use the 'useEffect' hook to check if the item is already present in the cart.
  useEffect(() => {
    // Check if the item is present in the 'cartItems' array by using the 'find' method.
    const result = cartItems.find(element => element.id === item.id);
    // Update the 'isAdded' state based on whether the item is found in the cart.
    if (result) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems, item]);

  // Render the UI for the 'Product' component.
  return (
    // Create a 'View' container to hold the product details and buttons.
    <View key={item.id} style={styles.container}>
      {/* Display the name, color, and price of the product using 'Text' components. */}
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>

      {/* Display the product image using the 'Image' component. */}
      <Image source={{uri: item.image}} style={styles.image} />

      {/* Render either "Remove from cart" or "Add to cart" button based on 'isAdded' state. */}
      {isAdded ? (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddTocart(item)} />
      )}
    </View>
  );
};

// Define the 'styles' object using 'StyleSheet.create' to hold the CSS-like styles for the component.
const styles = StyleSheet.create({
  // 'container' style for the main container holding the product details and buttons.
  container: {
    alignItems: 'center', // Align elements horizontally at the center of the container.
    borderBottomColor: 'green', // Set the bottom border color to green.
    borderBottomWidth: 2, // Set the bottom border width to 2 units.
    padding: 10, // Add 10 units of padding around the container.
  },
  // 'image' style for the product image.
  image: {
    width: 200, // Set the width of the image to 200 units.
    height: 250, // Set the height of the image to 250 units.
    margin: 10, // Add 10 units of margin around the image.
  },
});

// Export the 'Product' component as the default export for use in other parts of the application.
export default Product;
