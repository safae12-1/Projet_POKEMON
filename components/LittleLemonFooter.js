import * as React from 'react';
import { View, Text } from 'react-native';
 
export default function LittleLemonFooter() {
  return (
    <View
     style={{
        backgroundColor: '#FFCB05',
        marginBottom: 0
      }}>

      <Text style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
         
        }}>

        All rights reserved by Pokemon, 2023{' '}
      </Text>
    </View>
  );
}