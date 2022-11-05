/**
 (Game: pick a card) Write a program that simulates picking a card from a deck of 52 cards. Your program should display the rank (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King) and suit (Clubs, Diamonds, Hearts, Spades) of the card.(15mins.)
Here is a sample run of the program: 
The card you picked is Jack of Hearts

 */

const ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

const selectRank = Math.floor(13 * Math.random());
const selectSuit = Math.floor(4 * Math.random());

console.log(`The card you picked is ${ranks[selectRank]} of ${suits[selectSuit]}.`)