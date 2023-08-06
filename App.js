// Import necessary modules from React and React Navigation.
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import the 'ProductWrapper' and 'UserList' components from their respective files.
import ProductWrapper from './src/components/ProductWrapper';
import UserList from './src/components/UserList';

// Create a Native Stack Navigator using 'createNativeStackNavigator'.
const Stack = createNativeStackNavigator();

// Create the main functional component named 'App'.
const App = () => {
  return (
    // Create a 'NavigationContainer' to manage the navigation state of the app.
    <NavigationContainer>
      {/* Create a stack navigator with two screens. */}
      <Stack.Navigator>
        {/* Define the 'Home' screen with the 'ProductWrapper' component. */}
        <Stack.Screen name="Home" component={ProductWrapper} />
        {/* Define the 'Users' screen with the 'UserList' component. */}
        <Stack.Screen name="Users" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the 'App' component as the default export for use as the root component of the application.
export default App;
