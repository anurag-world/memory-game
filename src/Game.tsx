import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Card from './components/Card';

const generateShuffledCards = () => {
  const letters = 'AABBCCDDEEFFGGHH'.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.map((letter, index) => ({
    id: index,
    letter,
    isFlipped: false,
  }));
};

export default function Game(): React.JSX.Element {
  const [cards, setCards] = useState(generateShuffledCards());
  const [attempts, setAttempts] = useState(0);
  const [matches, setMatches] = useState(0);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  //console.log('cards', JSON.stringify(cards, null, 4));
  //console.log('selectedCards', JSON.stringify(selectedCards, null, 4));

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstIndex, secondIndex] = selectedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];
      //console.log(firstCard, secondCard);
      setAttempts((prev) => prev + 1);

      if (firstCard.letter === secondCard.letter) {
        setMatches((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }
      setSelectedCards([]);
    }
  }, [selectedCards]);

  const handleCardPress = (index: number) => {
    if (selectedCards.length < 2 && !cards[index].isFlipped) {
      setCards((prevCards) =>
        prevCards.map((card, i) =>
          i === index ? { ...card, isFlipped: true } : card
        )
      );
      setSelectedCards([...selectedCards, index]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CardContainer}>
        <FlatList
          data={cards}
          numColumns={4}
          renderItem={({ item, index }) => (
            <Card
              letter={item.letter}
              isFlipped={item.isFlipped}
              onPress={() => handleCardPress(index)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Attempts: {attempts}</Text>
        <Text style={styles.infoText}>Matches: {matches}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  CardContainer: {
    height: '60%',
  },
  infoContainer: {
    marginTop: 16,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
