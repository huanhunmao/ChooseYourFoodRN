import { View, Text, StyleSheet } from "react-native"
import MealList from "../components/MealList/MealList"
import { MEALS } from "../data/dummy-data"
import { useSelector } from "react-redux"

function FavoritesScreen(){
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if(favoriteMeals.length  === 0) {
        return (
            <View style={styles.warningContainer}>
                <Text style={styles.text}>You have not a favorite food !</Text>
            </View>
        )
    }

    return (
        <MealList displayMeals={favoriteMeals}/>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    warningContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})