# Memory Game App

This is a simple memory game built with React Native and TypeScript using Expo. The game consists of 16 cards, each displaying a letter from A to H (2 of each letter). The objective is to match all pairs of cards with the fewest attempts.

## Features

- 16 cards with letters A to H (2 of each)
- Cards are shuffled randomly at the start and on each reload
- 4 by 4 grid layout
- Counter for the number of attempts
- Display for the number of matches completed
- Cards flip to show the letter when clicked
- Cards become non-clickable and change color when matched
- Reset button appears after all cards have been matched

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed

### Installing

1. Clone the repository

   ```sh
   git clone https://github.com/anurag-world/memory-game.git
   cd memory-game
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Start the development server

   ```sh
   npm start
   ```

4. Follow the instructions in the terminal to open the app in the Expo Go app on your device or an emulator.

## Code Overview

### GameScreen.tsx

The main component that initializes the game, handles game logic, and renders the UI.

- `generateShuffledCards()`: Function to create and shuffle the cards.
- `handleCardPress(index: number)`: Function to handle the card press event.
- `resetGame()`: Function to reset the game state.

### components/Card.tsx

The card component that displays each card and handles its UI.

- Props: `letter`, `isFlipped`, `isDisabled`, `onPress`
- Displays the letter if flipped, otherwise shows a question mark.
- Changes background color and disables click if the card is matched.

## Running the Tests

Currently, there are no automated tests for this project.

## Built With

- [React Native](https://reactnative.dev/) - Framework for building native apps
- [Expo](https://expo.dev/) - Platform for universal React applications

## Acknowledgments

- Inspiration and guidance from the React Native, TypeScript and Expo documentation.
