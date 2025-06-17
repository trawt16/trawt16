const fs = require('fs');
const file = 'main.java';

function getRandomWord() {
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'hello', 'world'];
  return words[Math.floor(Math.random() * words.length)];
}

function writeRandomLine() {
  const line = Array.from({ length: 6 }, getRandomWord).join(' ') + '\n';
  fs.appendFileSync(file, line);
  console.log('Wrote:', line.trim());
}

setInterval(writeRandomLine, 5000); // Writes every second
