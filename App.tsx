
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StyleSheet,
  Text,
} from 'react-native';
import RootLayout from './_layout';
import { SignIn } from './auth_components/SignIn';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatComponent } from './auth_components/ChatComponent';
import Home from './components/homepage';
import Login from './components/login';

import Chatbox from './components/chatbox';
import { Authenticated } from 'convex/react';
import { useAuthActions } from '@convex-dev/auth/react';
import { Id } from './convex/_generated/dataModel';
import GroupComponent from './auth_components/GroupComponent';
import Testing from './auth_components/Testing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

<<<<<<< Updated upstream
export type RootStackParamList = {
  Login: undefined;
  Chat: {email:string};
  Group: undefined;
  GroupChat: { groupId: Id<'groups'>; email:string};
  Test:undefined;
}

// export type RootStackParamList = {
//   Login:undefined;
//   Chat:undefined;
// // }

// <<<<<<< HEAD

// function App() {
//   return (
//     <RootLayout>
//       <NavigationContainer >
//         <Stack.Navigator screenOptions={{
//           headerShown:false
//         }} initialRouteName='Login'>
//           <Stack.Screen name="Login" component={SignIn} />
//           <Stack.Screen name="Chat" component={ChatComponent} />
//         </Stack.Navigator>
//         </NavigationContainer>
//     </RootLayout>)
// =======
const Stack = createNativeStackNavigator<RootStackParamList>();
=======
import Chatbox from './components/chatbox';
import ChatScreen from './components/chatScreen';
// export type RootStackParamList = {
//   Login:undefined;
//   Chat:undefined;
// // }
>>>>>>> Stashed changes

// // const UI = false;

function App() {
  // if(!UI){
  // return (
  //   <RootLayout>
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName='Login'>
  //         <Stack.Screen name="Login" component={SignIn} />
  //         <Stack.Screen name="Chat" component={ChatComponent} />
  //       </Stack.Navigator>
  //       </NavigationContainer>
  //   </RootLayout>)
  // }
  return (
    <RootLayout>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName='Login'>
          <Stack.Screen name="Login" component={SignIn} />
          <Stack.Screen name="Chat" component={ChatComponent} />
          <Stack.Screen name="Test" component={Testing} />
          <Stack.Screen name="GroupChat" component={GroupComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
    </RootLayout>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
