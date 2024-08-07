// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Button } from 'react-native';
import axios from 'axios';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchProducts = async () => {
    // Replace with your actual API endpoint
    const response = await axios.get(`https://api.example.com/search?q=${query}`);
    setResults(response.data);
  };

  return (
    <View>
      <TextInput
        placeholder="Search products..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Button title="Search" onPress={searchProducts} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
      />
    </View>
  );
};

export default SearchScreen;
