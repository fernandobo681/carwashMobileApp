// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'light';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });


// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/home/HomeScreen';
// import SignInScreen from './src/screens/auth/SignInScreen';
// import { Text, View } from 'react-native/types';

// const Stack = createNativeStackNavigator();

// const getIsSignedIn = () => {
//   return true;
// };


// function SplashScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Getting token...</Text>
//     </View>
//   );
// }


// export default function App() {
//   const isSignedIn = getIsSignedIn();
//   const [isLoading, setIsLoading] = React.useState(true);
//   const [userToken, setUserToken] = React.useState(null);

//   const getUserToken = async () => {
//     // testing purposes
//     const sleep = (ms: number) => new Promise((r: any) => setTimeout(r, ms));
//     try {
//       // custom logic
//       await sleep(2000);
//       const token = null;
//       setUserToken(token);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUserToken();
//   }, []);

//   if (isLoading) {
//     // We haven't finished checking for the token yet
//     return <SplashScreen />;
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isSignedIn ? (
//           <>
//             <Stack.Screen
//               name="Inicio"
//               component={HomeScreen}
//               options={{
//                 title: 'My home',
//                 headerStyle: {
//                   backgroundColor: '#19A7CE',
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                   fontWeight: 'bold',
//                 },
//               }}
//             />
//           </>
//         ) : (
//           <>
//             <Stack.Screen
//               name="Inicio de sesión"
//               component={SignInScreen}
//               options={{
//                 headerShown: false
//               }}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




import * as React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import SignInScreen from './src/screens/auth/SignInScreen';

const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Getting token...</Text>
        <ActivityIndicator size="large" />
      </View>
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms: number) => new Promise((r: any) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen
              name="Inicio de sesión"
              component={SignInScreen}
              options={{
                headerShown: false
              }}
              initialParams={{ setUserToken }}

            />
          </>
        ) : (
          // User is signed in
          <>
            <Stack.Screen
              name="Inicio"
              component={HomeScreen}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#19A7CE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
