import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = () => {
    const [input,setInput]=useState('')
    const [storeData, setStoreData] = useState("")
    
    const AddItem = async()=>{
        try {
            await AsyncStorage.setItem("ListItem",input)
            console.log("ListItems",input)
            setInput("");

        } catch (error) {
            console.log('error', error)
            
        }
    }
    const displayItem =async()=>{
        try {
            const data = await AsyncStorage.getItem("ListItem") 
            setStoreData(data);
        } catch (error) {
            console.log('ERRor',error)
            
        }
    }

  return (
    <View style={{alignItems:'center'}}>
      <TextInput
      placeholder='   write something here'
      value={input}
      onChangeText={text => setInput(text)}
      style={{width:330,height:50,borderRadius:10,borderColor:"black",borderWidth:2,marginTop:40}}/>
      <TouchableOpacity onPress={()=>AddItem()}
      style={{width:230,height:50,backgroundColor:"grey",
               marginTop:30,borderRadius:10}}>
        <Text style={{textAlign:"center",marginTop:12,fontSize:20,fontWeight:"700"}}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>displayItem()}
      style={{width:230,height:50,backgroundColor:"grey",
               marginTop:30,borderRadius:10}}>
        <Text style={{textAlign:"center",marginTop:12,fontSize:20,fontWeight:"700"}}>Display</Text>
      </TouchableOpacity>
      <Text style={{marginTop:50,fontSize:20}}>you write {storeData}</Text>
    </View>
  )
}

export default Home