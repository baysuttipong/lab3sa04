import React from "react";
import { FlatList, View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Bangkok', code: '10110'},
    { place: 'Pattaya', code: '20150'},
   ]
   
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather',{zipCode: code})
    }}>
    <View style={styles.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
            <Text style= {styles.top}>Choose Location</Text>
        <FlatList
        data = {availableZipItems}
        keyExtractor = {item => item.code}
        renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
    />    
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1
    },
    backdrop: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
    },
    top: {
        marginTop:30,
        marginBottom:30,
        fontSize:50,
        textAlign:'center',
    }
})