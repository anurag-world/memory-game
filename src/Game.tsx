import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import Card from './components/Card';

interface CardType {
  id: number;
  letter: string;
  isFlipped: boolean;
  isDisabled: boolean;
}

const generateShuffledCards = (): CardType[] => {
  const letters = 'AABBCCDDEEFFGGHH'.split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.map((letter, index) => ({
    id: index,
    letter,
    isFlipped: false,
    isDisabled: false,
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
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === firstIndex || index === secondIndex
              ? { ...card, isDisabled: true }
              : card
          )
        );
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

  const resetGame = () => {
    setCards(generateShuffledCards());
    setAttempts(0);
    setMatches(0);
    setSelectedCards([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.CardContainer}>
        <FlatList
          data={cards}
          numColumns={4}
          renderItem={({ item, index }) => (
            <Card
              letter={item.letter}
              isFlipped={item.isFlipped}
              isDisabled={item.isDisabled}
              onPress={() => handleCardPress(index)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, styles.infoTextPadding]}>
          Attempts: {attempts}
        </Text>
        <Text style={styles.infoText}>Matches: {matches}</Text>
      </View>

      {matches === 8 && (
        <View style={styles.resetButtonContainer}>
          <Button
            labelStyle={{ fontSize: 16 }}
            mode="elevated"
            onPress={resetGame}
          >
            Try Again
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardContainer: {
    height: '50%',
  },
  infoContainer: {
    marginTop: 16,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
  },
  infoTextPadding: {
    paddingBottom: 8,
  },
  resetButtonContainer: {
    marginTop: 28,
  },
});
