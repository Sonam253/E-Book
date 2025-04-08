document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // Valid credentials
      const validCredentials = {
        'sonam': 'sonam123',  // username: password
        'admin': 'admin123'
      };
      
      // Validation checks
      if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
      }
      
      if (validCredentials[username] && password === validCredentials[username]) {
        // Store login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Redirect to admin dashboard
        window.location.href = 'admin-dashboard.html';
      } else {
        alert('Invalid username or password. Please try again.');
        // Clear the password field for better UX
        document.getElementById('password').value = '';
      }
    });
  }
});