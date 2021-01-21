import React,{useState, useEffect} from 'react'

import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import { CloseCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import {ScreenKey} from '../../../globals/constants'

export default function Search(props){
  const [keyword, setKeyword] = useState("");
  
  const [historySearchList, setHistorySearchList] = useState([ "abc",  "123", "test"])
  const [selectedId, setSelectedId] = useState(null);

  
  const searchBtn = () =>{
    console.log("press search button keyword: ", keyword)

    props.navigation.navigate(ScreenKey.ListCourses, {keyword: keyword})

    setHistorySearchList([...historySearchList, keyword])
  }

  const deleteHistory = (index) =>{
    setHistorySearchList(historySearchList.splice(index,1));
    console.log("delete history" + index);
    console.log(historySearchList)

  }

  const renderHistoryList = () =>{
    historySearchList.map((historySearch, index) => 
              <View key={index} style={styles.historySearchContainer}>
                
                <Text style={styles.historySearch}>
                  {historySearch}
                </Text>
                
                <TouchableOpacity style={{width: 30, height: 30}} onPress={()=> {deleteHistory(index)}}>
                <Image
                  source={require('../../../../assets/delete.png')}
                  style={{ width: 25, height: 25 }}
                />
                
                </TouchableOpacity>
                
              </View>
            )
  }
    return (
        <View style={styles.container}>
          
          <View style={styles.searchbar}>
            <TextInput 
              placeholder = 'Typing...'
              style = {styles.searchbox}
              onChangeText={value => setKeyword(value)}
              />
            <Button 
              onPress = {searchBtn}
              title = 'Search'
              style = {styles.btn}
            />
          </View>
          <TouchableOpacity style={{width: 30, height: 40, margin: 10}} onPress={()=> {deleteHistory(index)}}>
          
            <Text style={{backgroundColor: "steelblue", width: 350, height:40}}>Delete all search history...</Text>
          </TouchableOpacity>
          {
            renderHistoryList()
          }

      
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignContent: "flex-start",
      justifyContent: "flex-start",
      margin: 10
    },
    searchbar:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
      // justifyContent: 'space-between',
    },
    searchbox:{
        borderColor: 'gray', 
        borderWidth: 1,
        width: 300,
        height: 40,
    },
    btn: {
      height: 40, 
      width: 50,
      margin: 5
    },
    historySearch:{
      height: 30,
      width: 350,
      backgroundColor: 'powderblue',
      flexDirection: 'row'
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    historySearchContainer:{
      flexDirection: 'row',
      margin: 5, height: 30
    }
})