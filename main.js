function logReset(event) {
	log.textContent = `Form reset! Time stamp`;
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('reset', logReset);