import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Ionicons} from '@expo/vector-icons';

import UsageMeter from './screens/UsageMeter';
import GraphView from './screens/GraphView';
import LoginScreen from './screens/LoginScreen';
import { GlobalStyles } from './constants/styles';
import SettingsScreen from './screens/SettingScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function UsageViewer() {
  return <BottomTabs.Navigator screenOptions={{

    headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
    headerTintColor:'white',


    tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
  
  }}>
    <BottomTabs.Screen 
      name="Home" 
      component={UsageMeter} 
      options={{ 
        title: 'Home',
        //headerShown:false,
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => <Ionicons name='home-outline' size={size} color={color}/>

    }}/>
    <BottomTabs.Screen 
      name="View Usage" 
      component={GraphView} 
      options={{ 
        title: 'Usage',
        //headerShown:false,
        tabBarLabel: 'Usage',
        tabBarIcon: ({color, size}) => <Ionicons name='bar-chart-outline' size={size} color={color}/>

    }}/>

    <BottomTabs.Screen 
      name="Settings" 
      component={SettingsScreen} 
      options={{ 
        title: 'Settings',
        //headerShown:false,
        tabBarLabel: 'Settings',
        tabBarIcon: ({color, size}) => <Ionicons name='settings-outline' size={size} color={color}/>

    }}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="UsageViewer" component={UsageViewer} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}


