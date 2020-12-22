import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import ListCourses from '../../Courses/ListCourses/list-courses'

export default function Download(props){
    const courses = [
        {
            title: 'Mobile',
            data:[
            
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
    container:{
        flex: 1,
        alignContent: 'center'
    },
    searchbox:{
        flex: 1, 
        borderColor: 'gray', 
        borderWidth: 1,
        height: 40,
    }
})