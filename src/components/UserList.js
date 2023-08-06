// Import necessary modules from React and React Native.
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';

// Import the 'useDispatch' and 'useSelector' hooks from 'react-redux' to interact with the Redux store.
import {useDispatch, useSelector} from 'react-redux';

// Import the 'getUserList' action from the Redux action file.
import {getUserList} from '../redux/action';

// Import the 'UserItem' component from its respective file.
import UserItem from './UserItem';

// Create a functional component named 'UserList'.
const UserList = () => {
  // Access the 'dispatch' function from the Redux store using the 'useDispatch' hook.
  const dispatch = useDispatch();

  // Access the 'userList' data from the Redux store using the 'useSelector' hook.
  const userList = useSelector(state => state.userList[0]?.users);

  // Use the 'useEffect' hook to fetch the user list when the component mounts.
  useEffect(() => {
    // Dispatch the 'getUserList' action to fetch the user list from an external source (e.g., API).
    dispatch(getUserList());
  }, [dispatch]);

  // Render the UI for the 'UserList' component.
  return (
    // Create a 'ScrollView' container to display the list of users with scrolling capability.
    <ScrollView contentContainerStyle={styles.container}>
      {/* Check if 'userList' is not empty and has data, then map through the users and render the 'UserItem' component for each user. */}
      {userList && userList.length ? (
        userList.map(user => <UserItem key={user.id} user={user} />)
      ) : (
        // If 'userList' is empty or has no data, display a message indicating no users found.
        <Text style={styles.Text}>No users found</Text>
      )}
    </ScrollView>
  );
};

// Define the 'styles' object using 'StyleSheet.create' to hold the CSS-like styles for the component.
const styles = StyleSheet.create({
  // 'container' style for the main container holding the user list.
  container: {
    paddingVertical: 20, // Add 20 units of vertical padding above and below the content.
    alignItems: 'center', // Align the content items horizontally at the center of the container.
  },
  // 'Text' style for the text indicating no users found.
  Text: {
    fontSize: 30, // Set the font size to 30.
  },
});

// Export the 'UserList' component as the default export for use in other parts of the application.
export default UserList;
