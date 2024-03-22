import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Course = (props) => {
  const [rating, setRating] = useState(0);

  const handleRateCourse = () => {
    if (rating < 6) {
      setRating(rating + 1);
    } else {
      setRating(6);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Rating: {rating}</Text>
        <TouchableOpacity onPress={handleRateCourse} style={styles.ratingButton}>
          <Text style={styles.ratingButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    marginLeft: -45,
    width: 300,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  description: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
    color: 'white',
  },
  ratingButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
  },
  ratingButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Course;