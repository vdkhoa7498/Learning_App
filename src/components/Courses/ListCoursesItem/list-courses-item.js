import React from'react';
import {View, Text, Image} from 'react-native';
import Course from '../../Common/course'

export default function ListCoursesItem(props){
    return (
        <Course item={props.item} />
    );
}