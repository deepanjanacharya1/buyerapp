// screens/CartScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const CartScreen = ({ navigation }) => {
  const cartItems = [
    { id: '1', name: 'Product 1', quantity: 2 },
    { id: '2', name: 'Product 2', quantity: 1 },
  ];

  return (
    <View>
      <Text>Cart Screen</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} (x{item.quantity})</Text>
          </View>
        )}
      />
      <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

export default CartScreen;
