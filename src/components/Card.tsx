import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// Define the props for the Card component
interface CardProps {
  letter: string; // The letter to display on the card
  isFlipped: boolean; // Whether the card is flipped to show the letter
  isDisabled: boolean; // Whether the card is disabled (non-clickable)
  onPress: () => void; // Function to call when the card is pressed
}

// Card component definition
const Card = ({
  letter,
  isFlipped,
  isDisabled,
  onPress,
}: CardProps): React.JSX.Element => {
  return (
    // TouchableOpacity to make the card clickable
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.card, styles.shadow, isDisabled && styles.disabledCard]}
    >
      <View style={styles.innerCard}>
        {/* Display the letter if flipped, otherwise show a question mark */}
        <Text style={styles.cardText}>{isFlipped ? letter : '?'}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Styles for the card component
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
  // Style for disabled cards (non-clickable and different background color)
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
