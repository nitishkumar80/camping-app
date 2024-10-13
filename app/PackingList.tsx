import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';

// Pre-built templates for different trips
const preBuiltTemplates = {
  weekendCamping: [
    { id: '1', name: 'Tent', category: 'Gear', packed: false },
    { id: '2', name: 'Sleeping Bag', category: 'Gear', packed: false },
    { id: '3', name: 'Food', category: 'Food', packed: false },
    { id: '4', name: 'First Aid Kit', category: 'First Aid', packed: false },
  ],
  survivalCamping: [
    { id: '5', name: 'Survival Knife', category: 'Gear', packed: false },
    { id: '6', name: 'Water Purifier', category: 'Gear', packed: false },
    { id: '7', name: 'Fire Starter', category: 'Gear', packed: false },
    { id: '8', name: 'Energy Bars', category: 'Food', packed: false },
  ],
  familyCamping: [
    { id: '9', name: 'Extra Tent', category: 'Gear', packed: false },
    { id: '10', name: 'Board Games', category: 'Gear', packed: false },
    { id: '11', name: 'Water Bottles', category: 'Food', packed: false },
  ],
};

// List of pre-built templates with unique background colors and icons
const templateData = [
  { id: 'weekendCamping', name: 'Weekend Camping', backgroundColor: '#FFCDD2', icon: 'home-outline' },
  { id: 'survivalCamping', name: 'Survival Camping', backgroundColor: '#C8E6C9', icon: 'skull-outline' },
  { id: 'familyCamping', name: 'Family Camping', backgroundColor: '#BBDEFB', icon: 'people-outline' },
];

const PackingList = () => {
  const [packingList, setPackingList] = useState([]);
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('Gear'); // Default category
  const navigation = useNavigation();

  // Add custom items to the packing list
  const addItem = () => {
    if (itemName.trim()) {
      setPackingList((prevList) => [
        ...prevList,
        { id: Math.random().toString(), name: itemName, category, packed: false },
      ]);
      setItemName('');
      setCategory('Gear'); // Reset category after adding
    }
  };

  // Toggle packed/unpacked status
  const togglePacked = (id) => {
    setPackingList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // Load a pre-built template
  const loadTemplate = (templateId) => {
    setPackingList(preBuiltTemplates[templateId]);
  };

  // Group items by category for sorting
  const groupByCategory = () => {
    const categories = ['Gear', 'Food', 'First Aid'];
    const grouped = categories.map((category) => ({
      title: category,
      data: packingList.filter((item) => item.category === category),
    }));
    return grouped.filter((section) => section.data.length > 0); // Only show categories with items
  };

  // Save the list (mock implementation)
  const saveList = () => {
    alert('Packing list saved!');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Camping Packing List</Text>

      {/* Input field to add a new item */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item name"
          style={styles.input}
          value={itemName}
          onChangeText={(text) => setItemName(text)}
        />
        <TextInput
          placeholder="Category (Gear, Food, etc.)"
          style={styles.input}
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>

      {/* Pre-built list templates in cards */}
      <View style={styles.templateContainer}>
        <Text style={styles.sectionTitle}>Pre-built Lists</Text>
        <FlatList
          horizontal
          data={templateData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.templateCard, { backgroundColor: item.backgroundColor }]}
              onPress={() => loadTemplate(item.id)}
            >
              <Icon name={item.icon} size={30} color="#fff" />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Packing list grouped by category */}
      <Text style={styles.sectionTitle}>Current Packing List</Text>
      <SectionList
        sections={groupByCategory()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => togglePacked(item.id)}>
            <Text style={item.packed ? styles.packedText : styles.unpackedText}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.categoryTitle}>{title}</Text>
        )}
      />

      {/* Save list button */}
      <Button title="Save List" onPress={saveList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AEC1BA',
    marginTop: 40,
  },
  backButton: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    padding: 8,
  },
  templateContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  templateCard: {
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  packedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
    padding: 5,
 
  },
  unpackedText: {
    color: 'black',
    padding: 9,
    backgroundColor: 'rgba(255, 165, 0, 0.4)', // Orange with 50% opacity

    textAlign:'center',
   
  },
});

export default PackingList;
