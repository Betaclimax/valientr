import React from 'react';
import { Text, View } from 'react-native';

export default function CustomScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is my custom first screen!</Text>
    </View>
  );
}