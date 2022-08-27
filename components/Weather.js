import React, { useState } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){
    const [forcastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text>Zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forcastInfo}/>
        </ImageBackground>
    )   
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})