const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const statusMessage = document.getElementById('statusMessage');
const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.textContent = isPassword ? 'Hide' : 'Show';
  togglePassword.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    statusMessage.textContent = 'Please enter both your email and password.';
    statusMessage.classList.add('error');
    return;
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    statusMessage.textContent = 'Please use a valid email address.';
    statusMessage.classList.add('error');
    return;
  }

  statusMessage.classList.remove('error');
  statusMessage.textContent = `Welcome back, ${email}! Your sign-in is ready.`;
  form.reset();
  passwordInput.type = 'password';
  togglePassword.textContent = 'Show';
});
