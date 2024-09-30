const input = document.getElementById('4_input');
const startButton = document.getElementById('startbtn');
const message = document.getElementById('message');

startButton.addEventListener('click', () => {
  if (input.value <= 0) {
    message.textContent = 'введiть число бiльше 0';
    return;
  }

  message.textContent = `таймер запущено`;

  setTimeout(() => {
    message.textContent = 'час вицшов';
  }, input.value * 1000);
});
