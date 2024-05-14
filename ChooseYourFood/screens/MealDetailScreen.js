import {View, Image, Text, StyleSheet, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import List from '../components/MealDetail/List'
import SubTitle from '../components/MealDetail/SubTitle'
import { useEffect } from 'react'
import IconButton from '../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'

function MealDetailScreen({route, navigation}){
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
    const dispatch = useDispatch()
    const mealId = route.params.mealId
    const selectMeal = MEALS.find(meal => meal.id === mealId)

    const mealIsFavorite = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            dispatch.removeFavorite({id: mealId})
        }else{
            dispatch.addFavorite({id: mealId})
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                name={mealIsFavorite ? 'star' : 'star-outline'}
                size={24}
                color="white"
                onPress={changeFavoriteStatusHandler}/>
            }
        })
    },[navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetails 
            duration={selectMeal.duration}
            complexity={selectMeal.complexity}
            affordability={selectMeal.affordability}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectMeal.ingredients}/>
                    <SubTitle>Steps</SubTitle>
                    <List data={selectMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer:{
        alignItems: 'center',
    },
    listContainer: {
        width: '80%'
    }
})