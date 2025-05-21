import {Text, TouchableOpacity} from 'react-native';
import {containerStyle} from "./styles";

export default function EventButton({title, date}) {
    return (
        <TouchableOpacity style = {containerStyle.eventButton}>
            <Text>{title}</Text>
            <Text>{date}</Text>
        </TouchableOpacity>
    )
}