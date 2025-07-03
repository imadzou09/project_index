document.getElementById('contactBtn').addEventListener('click', () => {
  document.getElementById('contactSection').classList.toggle('hidden');
  window.location.hash = '#contactSection';
});
