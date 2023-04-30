import * as React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LittleLemonHeader from './components/LittleLemonHeader';
import MenuItems from './components/MenuItems';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  const [loadedCardsCount, setLoadedCardsCount] = React.useState(3);

  const loadMoreCards = () => {
    setLoadedCardsCount(loadedCardsCount + 3);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <LittleLemonHeader />
        <MenuItems loadedCardsCount={loadedCardsCount} />
        <LittleLemonFooter />
      </View>
      <TouchableOpacity onPress={loadMoreCards} style={styles.loadMoreButton}>
        <Text style={styles.loadMoreText}>Charger plus de cartes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  loadMoreButton: {
    backgroundColor: '#FFCB05',
    margin: 20,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  loadMoreText: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
});
