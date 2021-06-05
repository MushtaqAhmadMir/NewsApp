import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function Loader({isLoading}) {
  return (
    <View style={{flex: 1}}>
      {isLoading ? <ActivityIndicator color="blue" size={'large'} /> : null}
    </View>
  );
}
