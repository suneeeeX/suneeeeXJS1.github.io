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
