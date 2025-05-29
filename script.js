document.getElementById('oddity-btn').addEventListener('click', function () {
  const logo = document.getElementById('google-logo');
  if (logo) {
    logo.src = 'img/logo.svg';
    logo.alt = 'Oddity';
  }
});
