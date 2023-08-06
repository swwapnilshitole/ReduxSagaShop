// Import necessary modules from React and React Native.
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Create a functional component named 'UserItem' and pass 'user' as a prop.
const UserItem = ({user}) => {
  // Render the UI for the 'UserItem' component.
  return (
    // Create a 'View' container to hold the user details.
    <View style={styles.container}>
      {/* Display the user's profile image using the 'Image' component. */}
      <Image source={{uri: user.image}} style={styles.image} />

      {/* Display the user's full name using the 'Text' component. */}
      <Text
        style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>

      {/* Display the user's age using the 'Text' component. */}
      <Text style={styles.userAge}>{`Age: ${user.age}`}</Text>

      {/* Display the user's email using the 'Text' component. */}
      <Text style={styles.userEmail}>{`Email: ${user.email}`}</Text>
    </View>
  );
};

// Define the 'styles' object using 'StyleSheet.create' to hold the CSS-like styles for the component.
const styles = StyleSheet.create({
  // 'container' style for the main container holding the user details.
  container: {
    padding: 10, // Add 10 units of padding around the container.
    alignItems: 'center', // Align elements horizontally at the center of the container.
    borderBottomColor: 'gray', // Set the bottom border color to gray.
    borderBottomWidth: 1, // Set the bottom border width to 1 unit.
  },
  // 'image' style for the user's profile image.
  image: {
    width: 100, // Set the width of the image to 100 units.
    height: 100, // Set the height of the image to 100 units.
    borderRadius: 50, // Set the border radius to create a circular shape (for a rounded image).
  },
  // 'userName' style for the user's full name.
  userName: {
    fontSize: 24, // Set the font size to 24.
    fontWeight: 'bold', // Set the font weight to bold.
    marginTop: 5, // Add 5 units of margin at the top of the text element.
  },
  // 'userAge' style for the user's age.
  userAge: {
    fontSize: 18, // Set the font size to 18.
    marginTop: 5, // Add 5 units of margin at the top of the text element.
  },
  // 'userEmail' style for the user's email.
  userEmail: {
    fontSize: 16, // Set the font size to 16.
    color: 'blue', // Set the text color to blue.
    marginTop: 5, // Add 5 units of margin at the top of the text element.
  },
});

// Export the 'UserItem' component as the default export for use in other parts of the application.
export default UserItem;
