import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

export default function SectionCourses(props) {
  const courses = [
      {
          id: 1,
          title: "Android",
          author: "Hai Pham",
          level: "Advance",
          released: "Nov 6, 2020",
          duration: "30 hours",
          uri: 'https://vnreview.vn/image/19/18/53/1918537.jpg'
      },
      {
        id: 2,
        title: "IOS",
        author: "Hai Pham",
        level: "Advance",
        released: "Nov 6, 2020",
        duration: "30 hours",
        uri: 'https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/TP/29-12-2015/he-dieu-hanh-ios-la-gi-1.jpg'
    },
    {
      id: 3,
      title: "React Native",
      author: "Hai Pham",
      level: "Advance",
      released: "Nov 6, 2020",
      duration: "30 hours",
      uri: 'https://miro.medium.com/max/1000/1*kQ11_TLArd7xGuWiSomBSg.png'
  }
  ]

  const renderListItem = () =>{
      return courses.map( item => <SectionCoursesItem item={item} navigation={props.navigation}/>);
      // return courses.map(Item => <SectionCoursesItem Item = {Item}/>);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>{props.title}</Text>
      </View>
      <ScrollView horizontal = {true}>
          {renderListItem() }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});