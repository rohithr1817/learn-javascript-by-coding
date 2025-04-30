// Your JavaScript code here

/*

What is Shuffling an Array?
Shuffling an array means rearranging the elements in the array in a random order. 
Imagine you have a deck of cards, and you want to mix them up so that they are not in the original order. 
Shuffling does the same thing for an array of items.

Why Shuffle?
- Randomness: Shuffling is useful when you want to randomize the order of items. For example, in games, you might want to shuffle cards or randomize player turns.
- Fairness: In situations like drawing lots or selecting random samples, shuffling ensures that every item has an equal chance of being in any position.

How Does It Work?
1. Pick an Item: Start with the last item in the array.
2. Random Swap: Choose a random item from the entire array (including the one you picked) and swap them.
3. Repeat: Move to the next item (going backward) and repeat the process until you reach the first item.

Example
Imagine you have an array of numbers: [1, 2, 3, 4, 5]. After shuffling, it might look like this: [3, 1, 4, 5, 2]. The order is now random, and you can’t tell what the original order was.

Summary
Shuffling an array is simply mixing up the items in a random way so that their order changes. 
It’s a common technique used in games, sampling, and many other applications where randomness is needed.

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

*/

// Example usage
const cards = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

cards.sort(() => Math.random() - 0.5);
console.log(cards); // Randomized order of cards 


// Try to use this less
// Recommended way to shuffle an array is to use the Fisher-Yates algorithm

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[random]] = [array[random], array[i]]; // Swap elements
    }
    return array;
}
shuffleArray(cards);
console.log(cards); // Randomized order of cards using Fisher-Yates algorithm


/*
Why Use Fisher-Yates Shuffle Instead of sort()?

Fairness:
- Fisher-Yates: Every card has an equal chance of being in any position. This means if you shuffle a deck of cards, every possible order is equally likely.
- Sort Method: When you use sort() with random numbers, some orders might happen more often than others. This means it’s not a fair shuffle.

Speed:
- Fisher-Yates: It goes through the cards one by one and swaps them. This is quick and takes about the same time no matter how many cards you have.
- Sort Method: It does a lot of extra work to sort the cards, which can take longer, especially if you have many cards.

Simplicity:
- Fisher-Yates: The way it works is clear: you pick a card and swap it with another card. It’s easy to follow.
- Sort Method: It looks simple, but because it relies on random sorting, it can be confusing to understand how it really works.

Summary:
- Fisher-Yates is like mixing cards in your hands, making sure every card has a fair chance to be anywhere.
- Sort with Random is like throwing cards in the air and hoping they land in a random order, but some cards might end up in the same spot more often.

So, Fisher-Yates is better because it’s fair, fast, and easy to understand!
*/


/*

Example: Shuffling a Deck of Cards

Imagine you have a small deck of 4 cards: ['A', 'B', 'C', 'D'].

1. Fisher-Yates Shuffle
Using the Fisher-Yates Shuffle, you would shuffle the cards like this:

- Start with the original array: ['A', 'B', 'C', 'D']
- Randomly pick a card and swap it with another card.
- Here’s a possible sequence of swaps:
  - Swap card at index 3 (D) with index 1 (B): ['A', 'D', 'C', 'B']
  - Swap card at index 2 (C) with index 0 (A): ['C', 'D', 'A', 'B']
- After a few swaps, you might end up with: ['C', 'A', 'D', 'B'].

Result: Every possible order (like ['A', 'B', 'C', 'D'], ['B', 'A', 'D', 'C'], etc.) has an equal chance of occurring.

2. Sort Method
Now, let’s use the sort() method with a random comparator:

```javascript
const cards = ['A', 'B', 'C', 'D'];
cards.sort(() => Math.random() - 0.5);

This might give you a result like:

['B', 'D', 'A', 'C']

However, because of how the sort() method works, some arrangements might happen more often than others. For example, you might find that ['A', 'B', 'C', 'D'] appears more frequently than other combinations, especially if you run the sort multiple times. This is because the random comparator does not guarantee a uniform distribution of the results.

Comparison Summary:

- Fisher-Yates:
  - Every arrangement is equally likely.
  - Example result: ['C', 'A', 'D', 'B'] (random and fair).

- Sort Method:
  - Some arrangements may appear more often than others.
  - Example result: ['B', 'D', 'A', 'C'] (but not guaranteed to be fair).

Conclusion: The Fisher-Yates Shuffle is better because it ensures that every possible order of the cards has the same chance of happening, while the sort() method can lead to some orders being favored over others.

*/