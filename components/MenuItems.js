import { useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MenuItems() {
  const weaknessColors = ['#C70039', '#748FC9', 'red', '#2ECC71', '#F1C40F', '#3498DB', '#8E44AD'];
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [modal, setModal] = useState(false);
  const [groupedPokemonList, setGroupedPokemonList] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(response => response.json())
      .then(data => {
        const groupedPokemon = data.pokemon.reduce((groups, pokemon) => {
          const type = pokemon.type[0];
          if (!groups[type]) {
            groups[type] = [];
          }
          groups[type].push(pokemon);
          return groups;
        }, {});

        const sections = Object.keys(groupedPokemon).map(type => ({
          title: type,
          data: groupedPokemon[type],
        }));

        setPokemonList(data.pokemon);
        setGroupedPokemonList(sections);
      })
      .catch(error => console.log(error));
  }, []);

  const renderPokemonCard = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card} onPress={() => {
        setSelectedPokemon(item);
        setModal(true);
      }}>
        <Image style={styles.cardImage} source={{ uri: item.img }} />
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderPokemonModal = () => {
    if (!selectedPokemon) {
      return null;
    }
    return (
      <Modal visible={modal} animationType='slide'>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModal(false)}>
            <Icon name="times-circle" size={25} color="red" />
          </TouchableOpacity>
          <Image style={styles.modalImage} source={{ uri: selectedPokemon.img }} />
          <Text style={styles.modalTitle}>{selectedPokemon.name}</Text>
          <Text style={styles.modalText}>Type :{selectedPokemon.type}</Text>
          <Text style={styles.modalText}>Height :{selectedPokemon.height}</Text>
          <Text style={styles.modalText}>Weight :{selectedPokemon.weight}</Text>
        </View>
      </Modal>
    );
  };

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}>{section.title} </Text>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.card2}>
        {groupedPokemonList.map((section) => (
          <View key={section.title}>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            <FlatList
              data={section.data}
              keyExtractor={(item) => item.id}
              renderItem={renderPokemonCard}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ))}
        {renderPokemonModal()}
      </View>
    </View>
  )
}
  const loadMoreCards = () => {
    setLoadedCardsCount(loadedCardsCount + 3); 
  }; 
const styles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',

  },

card: {
  backgroundColor: '#3E82FC',
  borderRadius: 10,
  margin: 5,
  flexDirection: 'row',
  padding: 10, 
  alignItems: 'stretch',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  modalImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFCB05',

  },


  sectionHeader: {
    backgroundColor: '#FFCB05',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
    borderRadius: 17,

  },


});