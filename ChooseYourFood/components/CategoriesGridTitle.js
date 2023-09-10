import {View, Pressable, Text, StyleSheet, Platform } from 'react-native'

function CategoriesGridTitle({title, color, onPress}){
    return (
        <View style={styles.gridItem}>
            <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoriesGridTitle

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // android 阴影
        elevation: 4,
        // 下面是 ios 的阴影
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ?  'hidden' : null,
    },
    button: {
        flex: 1 // 这个需要给 不然 展示不出
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})