import {View, Text, FlatList, StyleSheet} from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useEffect, useLayoutEffect } from 'react'
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


    function renderMealItem(itemData){
        const {id, title, imageUrl, duration, complexity, affordability, } = itemData.item
        const mealItemProps = {id, title, imageUrl, duration, complexity, affordability}

        return <MealItem 
        // title={title}
        // imageUrl={imageUrl}
        // duration={duration}
        // complexity={complexity.toUpperCase()}
        // affordability={affordability.toUpperCase()}
        {...mealItemProps}
        />
    }

    return (
        <View style={styles.container}>
            <FlatList
            data={displayMeals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})