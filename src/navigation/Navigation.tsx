import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/auth/SignInScreen';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? AuthStack(Stack) : HomeStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}