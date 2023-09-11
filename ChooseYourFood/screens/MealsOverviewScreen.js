import {View, Text, FlatList, StyleSheet} from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealList/MealItem'
import { useEffect, useLayoutEffect } from 'react'
import MealList from '../components/MealList/MealList'
// import {useRoute} from '@react-navigation/native'

function MealsOverviewScreen({route, navigation}){
    const {categoryId} = route.params
    // const route = useRoute()
    // const {categoryId} = route.params
    const displayMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        // 找到对应的  并设置上 
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle,
        })
    },[categoryId, navigation])


    return (
      <MealList displayMeals={displayMeals}/>
    )
}

export default MealsOverviewScreen
