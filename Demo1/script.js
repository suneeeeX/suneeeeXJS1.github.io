// Function to generate a random HEX color
function getRandomColor() {
  const hexCharacters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for the button click
document.getElementById('btn-flip').addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById('color-name').textContent = newColor;
});
// Function to generate a random HEX color
function getRandomColor() {
  const hexCharacters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate random position
function getRandomPosition() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  return { x, y };
}

// Event listener for the button click
document.getElementById('btn-flip').addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById('color-name').textContent = newColor;
  
  // Create or select a random position for the text
  const randomPosition = getRandomPosition();

  // Create a new word or select an existing one and set its content
  const randomWordElement = document.createElement('div');
  randomWordElement.textContent = 'Your Word Here'; // Replace with the word you want
  randomWordElement.style.position = 'absolute';
  randomWordElement.style.left = `${randomPosition.x}px`;
  randomWordElement.style.top = `${randomPosition.y}px`;
  randomWordElement.style.fontSize = '24px'; // Adjust size as needed
  randomWordElement.style.color = getRandomColor(); // You can change this as well
  document.body.appendChild(randomWordElement);
});

