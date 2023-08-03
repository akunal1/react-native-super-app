import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MainStackNavigationProp} from '../navigation/MainNavigator';

const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dashboard</Text>
      <Button
        title="in-app screen"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />

      <Text style={{margin: 16}}>Add your Independent apps here </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Field');
        }}
        style={{
          borderWidth: 0.5,
          height: 150,
          width: 150,
          borderColor: 'lightgrey',
          borderRadius: 8,
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>Field</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    color: 'darkblue',
    textAlign: 'center',
  },
});

export default HomeScreen;
