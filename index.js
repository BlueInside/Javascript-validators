const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.className = 'error';
    emailError.textContent = '';
  } else {
    showError();
  }
});

function showError() {
  if (email.validity.tooShort) {
    emailError.textContent = 'Minimum 10 letters long';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address';
  }
  emailError.className = 'error active';
}
