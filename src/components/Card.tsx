import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface CardProps {
  letter: string;
  isFlipped: boolean;
  onPress: () => void;
}

const Card = ({ letter, isFlipped, onPress }: CardProps): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.innerCard}>
        <Text style={styles.cardText}>{isFlipped ? letter : '?'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  innerCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 32,
    color: '#333',
  },
});

export default Card;
