import React from "react";
import{ StyleSheet, Text, View } from "react-native";


export default function Loading(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.CallWeather}>날씨를 불러오는 중입니다</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-end",
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    CallWeather : {
        color : "#2c2c2c",
        fontSize : 30,
    },
    source :{
        fontSize : 10
    }
})