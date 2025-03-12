let display = document.getElementById('display');

function appendCharacter(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') appendCharacter(event.key);
  if (['+', '-', '*', '/'].includes(event.key)) appendCharacter(event.key);
  if (event.key === 'Enter') calculateResult();
  if (event.key === 'Backspace') deleteLast();
  if (event.key === 'Escape') clearDisplay();
  if (event.key === '.') appendCharacter('.');
});
