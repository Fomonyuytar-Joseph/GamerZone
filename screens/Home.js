import React , {useState} from 'react'
import {Text ,View , StyleSheet ,Button ,FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global'

function Home( {navigation})  {
  const [reviews, setReviews] = useState([
    {title:'legit', rating:5, body:'wewrwerewr' ,key:1},
    {title:'Max', rating:4, body:'i am sdsa' ,key:2},
    {title:'Joseph', rating:6, body:'shfjhdskf sdfsdfsdfsdf' ,key:3}
  ])

  // const pressHandler = ()=>{
  //   //navigation.navigate('ReviewDetails')
  //   navigation.push('ReviewDetails')
    
  // }
  return (
      <View style={globalStyles.container}>
        <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )

        }
        
        />
    {/* <Text style={globalStyles.titleText}>Home </Text> */}
    {/* <Button title='Review Details Page' onPress={pressHandler}/> */}
    </View>
  )
}

export default Home