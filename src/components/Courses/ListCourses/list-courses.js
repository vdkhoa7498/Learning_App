import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';

export default function ListCourses(props) {

  const renderListItem = (items) =>{
    return items.map( item => <ListCoursesItem navigation={props.navigation} item={item}/>);
    // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
}

  const rederSectionItem = () =>{
    console.log(props.courses)
    return props.courses.map (item =>
      <View>
        <Text>{item.title}</Text>
        <ScrollView horizontal = {false}>
          {renderListItem(item.data) }
        </ScrollView>
      </View>
      )
  }
  return (
    <View style={styles.container}>
      {rederSectionItem()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row'
    flex: 1
  },
  
});