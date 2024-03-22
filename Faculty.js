import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import Course from './Courses.js';

export default function Faculty(props) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    const renderMoreInfo = () => {
        if (showMoreInfo) {
            return (
                <View style={styles.cform}>
                    <Course
                    name={props.name}
                    description={props.description}
                    image={props.image}
                    />
                </View>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.fimg} source={props.fimg} />
            <View style={styles.words}>
                <Text style={styles.fname}>{props.fname}</Text>
                <Text style={styles.about}>{props.about}</Text>
                {renderMoreInfo()}
                <TouchableOpacity onPress={toggleMoreInfo}>
                    <FontAwesome6 name={showMoreInfo ? "angle-up" : "angle-down"} size={24} color="white" alignSelf='center' />
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  words: {
    flexDirection: 'column',
    maxWidth: 180,
  },
  fname: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cform: {
    marginLeft: -100,
    marginTop: 25,
    borderTopWidth: 1,
    borderColor: 'white',
  },
  cname: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  about: {
    marginTop: 5,
    marginBottom: 20,
    fontSize: 14,
    color: 'white',
  },
  fimg: {
    marginVertical: 90,
    width: 130,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});