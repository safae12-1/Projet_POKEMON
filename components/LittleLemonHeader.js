import { View, Text ,StyleSheet,Image} from 'react-native';

export default function LittleLemonHeader() {
    return (
      <View style={headerStyles.container}>
    <Image style={headerStyles.image} source={require('../assets/pokemon-home-logo-169.jpg')} />
  
      </View>
    );
  }
   
  const headerStyles = StyleSheet.create({
    image:{
      width: 390,
      height: 200,
      resizeMode: 'cover',
      
    },
    
  
  });
  
  