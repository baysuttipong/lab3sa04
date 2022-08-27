import React, { useState, useEffect } from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props){
        const [forcastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        speedwind: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3d5f629bc05a57e0dd578992af0bf1c8`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    speedwind: json.wind.speed });
        })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    

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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
})