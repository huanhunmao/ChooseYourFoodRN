import 'react-native-gesture-handler';

import { StyleSheet, StatusBar, } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

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
             />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
          </Drawer.Navigator>
        )
    }

  return (
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
  );
}

const styles = StyleSheet.create({
 
});
