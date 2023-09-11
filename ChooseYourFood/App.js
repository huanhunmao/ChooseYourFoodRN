import 'react-native-gesture-handler';

import { StyleSheet, StatusBar, } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorite-context';

export default function App() {
    const Stack = createNativeStackNavigator()
    const Drawer = createDrawerNavigator();

    function DrawNavigator(){

        return (
            <Drawer.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: "#351401",},
                headerTintColor: "white",
                sceneContainerStyle: {backgroundColor: "#3f2f25"},
                drawerContentStyle:{backgroundColor: '#351401'},
                drawerInactiveTintColor:'white',
                drawerActiveBackgroundColor: '#3f2f25'
              }}
            >
            <Drawer.Screen 
            name="MealCategories"
            component={CategoriesScreen}
            options={{
                drawerIcon: ({size, color}) => (
                    <Ionicons name='list' color={color} size={size}/>
                )
            }}
             />
            <Drawer.Screen 
            name="Favorites" 
            component={FavoritesScreen} 
            options={{
                drawerIcon: ({size, color}) => (
                    <Ionicons name='star' color={color} size={size}/>
                )
            }}
            />
          </Drawer.Navigator>
        )
    }

  return (
    <FavoritesContextProvider>
        <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#351401",},
          headerTintColor: "white",
          contentStyle: {backgroundColor: "#3f2f25"}
        }}>
            <Stack.Screen 
            name="Drawer" 
            component={DrawNavigator}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            />
            <Stack.Screen 
            name="MealDetail"
            component={MealDetailScreen}
            />
        </Stack.Navigator>
    {/* <CategoriesScreen/> */}
         </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
 
});
