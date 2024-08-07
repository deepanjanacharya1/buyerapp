// screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;

  const product = { id: productId, name: `Product ${productId}`, description: `Description of Product ${productId}` };

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default ProductDetailScreen;
