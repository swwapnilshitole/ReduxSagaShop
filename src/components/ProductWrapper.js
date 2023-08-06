// Import necessary modules from React Native and React.
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import React from 'react';

// Import the 'Header' and 'Product' components from their respective files.
import Header from './Header';
import Product from './Product';

// Create a functional component named 'ProductWrapper' and pass 'navigation' as a prop.
const ProductWrapper = ({navigation}) => {
  // Define an array of 'products' with details for different mobile phones.
  const products = [
    {
      id: 1,
      name: 'samsung mobile',
      color: 'white',
      price: 3000,
      image:
        'https://m.media-amazon.com/images/I/81itQPVn-GL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      id: 2,
      name: 'vivo mobile',
      color: 'red',
      price: 4000,
      image:
        'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      id: 3,
      name: 'Mi mobile',
      color: 'green',
      price: 9000,
      image:
        'https://m.media-amazon.com/images/I/81kvDo7F0GL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      id: 4,
      name: 'Oneplus mobile',
      color: 'green',
      price: 50000,
      image:
        'https://m.media-amazon.com/images/I/81kvDo7F0GL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      id: 5,
      name: 'Apple mobile',
      color: 'black',
      price: 100000,
      image:
        'https://m.media-amazon.com/images/I/81kvDo7F0GL._AC_UY436_FMwebp_QL65_.jpg',
    },
  ];
  // Render the UI for the 'ProductWrapper' component.
  return (
    // Create a 'View' container to hold the entire content.
    <View style={styles.container}>
      {/* Create a 'Button' to navigate to the "Users" screen when clicked. */}
      <Button
        title="Go to User List"
        color="#66b2b2"
        onPress={() => {
          navigation.navigate('Users');
        }}
      />
      {/* Render the 'Header' component to display the cart items count. */}
      <Header />

      {/* Create a 'ScrollView' to display a list of products with scrolling capability. */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Map through the 'products' array and render the 'Product' component for each item. */}
        {products.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
// Define the 'styles' object using 'StyleSheet.create' to hold the CSS-like styles for the component.
const styles = StyleSheet.create({
  // 'container' style for the main container holding the entire content.
  container: {
    flex: 1, // Set the container to take the entire available space on the screen.
  },
  // 'contentContainer' style for the content inside the 'ScrollView'.
  contentContainer: {
    paddingVertical: 20, // Add 20 units of vertical padding above and below the content.
    paddingHorizontal: 10, // Add 10 units of horizontal padding on both sides of the content.
    alignItems: 'center', // Align the content items horizontally at the center of the container.
  },
  // 'image' style for the product images displayed in the 'Product' component.
  image: {
    width: 100, // Set the width of the image to 100 units.
    height: 100, // Set the height of the image to 100 units.
    borderRadius: 50, // Set the border radius to create a circular shape.
  },
});

// Export the 'ProductWrapper' component as the default export for use in other parts of the application.
export default ProductWrapper;
