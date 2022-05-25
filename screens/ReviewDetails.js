import React from 'react'
import {Text , View ,StyleSheet , Button} from 'react-native'
import {globalStyles} from '../styles/global'

function ReviewDetails({navigation}) {
  // const pressHandler= ()=>{
  //   navigation.goBack()

  // }
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}>{navigation.getParam('title')} </Text>
    <Text style={globalStyles.titleText}>{navigation.getParam('rating')} </Text>
    <Text style={globalStyles.titleText}>{navigation.getParam('body')} </Text>
    {/* <Button title='Go to Home Page' onPress={pressHandler}/> */}
    </View>
  )
}


export default ReviewDetails