import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface CardProps {
  letter: string;
  isFlipped: boolean;
  isDisabled: boolean;
  onPress: () => void;
}

const Card = ({
  letter,
  isFlipped,
  isDisabled,
  onPress,
}: CardProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.card, styles.shadow, isDisabled && styles.disabledCard]}
    >
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  disabledCard: {
    backgroundColor: '#f5f5f5',
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
