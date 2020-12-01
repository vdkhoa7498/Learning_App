import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import SectionCourses from './SectionCourses/section-courses'
import ImageButton from '../../Common/image-button'

export default function Home(props) {

  const onPressNewReleases = () => {
    console.log('Pressed on New Releases')
  }

  return (
    <ScrollView>
      <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
      <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
      <ScrollView horizontal = {true}>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
          <View>
            <ImageButton title='NEW REALESE' onPress={onPressNewReleases()}/>
            <ImageButton title='RECOMMENDED FOR YOU' onPress={onPressNewReleases()}/>
          </View>
      </ScrollView>
      <SectionCourses navigation={props.navigation} title='Continue learning'/>
      <SectionCourses navigation={props.navigation} title='Path'/>
      <SectionCourses navigation={props.navigation} title='Channel'/>
      <SectionCourses navigation={props.navigation} title='Bookmarks'/>
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