import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses'

export default function Home(props) {

  const courses = [
    {
        title: 'Mobile',
        data:[
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
    },
    {
        title: 'Web',
        data:[
        {
            id: 1,
            title: "React",
            author: "Hai Pham",
            level: "Advance",
            released: "Nov 6, 2020",
            duration: "30 hours",
            uri: 'https://zigexn-ventura.github.io/assets/images/react-logo.png'
        },
        {
          id: 2,
          title: "APS.NET",
          author: "Hai Pham",
          level: "Advance",
          released: "Nov 6, 2020",
          duration: "30 hours",
          uri: 'https://static.gunnarpeipman.com/wp-content/uploads/2020/09/aspnet-featured.png'
        },
        {
          id: 3,
          title: "Vue",
          author: "Hai Pham",
          level: "Advance",
          released: "Nov 6, 2020",
          duration: "30 hours",
          uri: 'https://dragondev.vn/images/posts/q/1/F/q1FiADdO-vuejs-cta-main.jpg'
        }
    ]
    }
]

  return (
    <ScrollView>
      <ListCourses navigation={props.navigation} courses= {courses}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item:{
      margin: 5,
      width: 200,
      height: 200,
      backgroundColor: 'lightgray',
  },
});