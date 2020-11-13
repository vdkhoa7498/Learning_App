import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
export default function ListCourses(props) {
  const courses = [
      {
          id: 1,
          title: "Android",
          author: "Hai Pham",
          level: "Advance",
          released: "Nov 6, 2020",
          duration: "30 hours"
      },
      {
        id: 2,
        title: "IOS",
        author: "Hai Pham",
        level: "Advance",
        released: "Nov 6, 2020",
        duration: "30 hours"
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList data={courses}
        renderItem = {({item})  => <ListCoursesItem item={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    height: 40,
    marginTop: 20,
    textAlign: "center",
    borderColor: "gray",
    borderWidth: 1
  },
  btn:{
    height: 40,
    marginTop: 20,
    width: "98%",
    backgroundColor: "blue",
    alignItems: "center"
  },
  btnText:{
    justifyContent: "center",
    textAlign: "center",
  }
});