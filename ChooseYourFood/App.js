import { StyleSheet, StatusBar, } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

export default function App() {
    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: "#351401",},
          headerTintColor: "white",
          contentStyle: {backgroundColor: "#3f2f25"}
        }}>
            <Stack.Screen name="MealCategories" component={CategoriesScreen}
            options={{
                title: "All Categories",
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
