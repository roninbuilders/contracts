import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const dirname = path.dirname(fileURLToPath(import.meta.url));

const excludedWords = ['export', 'proxy', 'ronin', 'contracts', 'logic', 'default', 'as', 'from'];

// Read the file
const data = fs.readFileSync(path.join(dirname, 'index.ts'), 'utf8');

// Split the file into words, split words on underscore, and convert to lowercase
const words = data.match(/\b\w+\b/g)?.flatMap(word => word.split('_')).map(word => word.toLowerCase()) || [];

// Define a function to count the frequency of each word
function countWordFrequency(words: string[], excludedWords: string[]): { [key: string]: number } {
  return words.reduce((count: { [key: string]: number }, word: string) => {
    // Only count the word if it's not in the excluded words list
    if (!excludedWords.includes(word)) {
      // If the word is already in the count object, increment its count, otherwise set it to 1
      count[word] = (count[word] || 0) + 1;
    }
    return count;
  }, {} as { [key: string]: number });
}

// Define a function to get the top 10 most frequent words
function getTop100Words(words: string[], excludedWords: string[]): [string, number][] {
  // Count the frequency of each word
  const frequency = countWordFrequency(words, excludedWords);

  // Convert the frequency object to an array of [word, frequency] pairs
  const entries = Object.entries(frequency);

  // Filter out one-word words
  const filteredEntries = entries.filter(([word]) => word.length > 1);

  // Sort the array by frequency in descending order
  filteredEntries.sort((a, b) => b[1] - a[1]);

  // Take the first 100 elements of the sorted array
  return filteredEntries.slice(0, 100);
}

const top100 = getTop100Words(words, excludedWords);

console.log("The top 100 most frequent words are:");
for (const [word, frequency] of top100) {
  console.log(`"${word}" with a frequency of ${frequency}`);
}