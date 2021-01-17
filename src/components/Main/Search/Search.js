import React,{useState, useEffect} from 'react'
import { SearchBar, ListItem } from 'react-native-elements';
import {View, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import { CloseCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import {ScreenKey} from '../../../globals/constants'
import {tokenStore} from '../../../app/store'
import RootNavigation from'../../../../RootNavigation'
import {searchApi} from '../../../services/search-services'

export default function Search(props){
  const [keyword, setKeyword] = useState("");
  const [attribute, setAttribute] = useState("price");
  const [rule, setRule] = useState("ASC");
  const [category, setCategory] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [historySearchList, setHistorySearchList] = useState([{content: "abc"}, {content: "123"}])
  const token = tokenStore.getState();

  // var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", "Bearer " + token);

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };


  // useEffect(()=>{
    
  //   fetch("http://api.dev.letstudy.org/course/search-history", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       setHistorySearchList(JSON.parse(result).payload);
  //     })
  //     .catch(error => console.log('error', error));
  // })

  const searchBtn = () =>{
    console.log("press search button")

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"keyword":keyword,"opt":{"sort":{"attribute":attribute,"rule":rule},"category":category,"time":[{"min":0,"max":1},{"min":3,"max":6}],"price":[{"max":0},{"min":0,"max":200000},{"min":500000,"max":1000000}]},"limit":10,"offset":1});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://api.dev.letstudy.org/course/search", requestOptions)
    .then(response => response.text())
    .then(result => {
      setSearchList(JSON.parse(result).payload.rows)
      console.log(searchList)
      props.navigation.navigate(ScreenKey.ListCourses, {data: searchList})
    })
    .catch(error => console.log('error', error));

    setHistorySearchList(historySearchList.push(keyword))
  }

  const deleteHistory = (index) =>{
    setHistorySearchList(historySearchList.splice(index,1));
    // console.log("delete history" + index);

  }
    return (
        <View style={styles.container}>
          {/* <SearchBar
            searchIcon="true"
            lightTheme="true"
            showLoading="true"
            placeholder="Type Here..."
            onChangeText={value => setKeyword(value)}
            value={keyword}
          /> */}
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
          <View>
          {
            historySearchList.map((historySearch, index) => (
              <ListItem key={index} bottomDivider>
                <ReloadOutlined />
                <ListItem.Content style={styles.historySearch}>
                  <ListItem.Title>{historySearch.content}</ListItem.Title>
                </ListItem.Content>
                <TouchableOpacity onPress={()=> {deleteHistory(index)}}>
                  <CloseCircleOutlined />
                </TouchableOpacity>
                
              </ListItem>
            ))
          }
          </View>
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
      flexDirection: 'row'

    }
})