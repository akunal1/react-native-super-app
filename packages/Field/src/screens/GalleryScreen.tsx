import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const GalleryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Field Details</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GalleryScreen;
