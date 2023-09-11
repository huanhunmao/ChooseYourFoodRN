import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({name, size, color, onPress}){
    return <Pressable onPress={onPress}
    style={({pressed}) => pressed && styles.buttonPressed}
    >
        <Ionicons name={name} size={size} color={color}/>
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.7
    }
})