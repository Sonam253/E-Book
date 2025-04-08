document.getElementById('userLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Basic validation - in a real app, you would check against a database
  if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful! Redirecting to user dashboard...');
      // In a real application, you would redirect to the user dashboard
      // window.location.href = 'user-dashboard.html';
  } else {
      alert('Invalid email or password. Please try again.');
      document.getElementById('password').value = '';
  }
});