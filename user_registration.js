document.addEventListener('DOMContentLoaded', function() {
  const registrationForm = document.getElementById('registrationForm');
  
  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;
      
      // Simple validation
      if (!name || !email || !phone || !password) {
          alert('Please fill in all fields');
          return;
      }
      
      // Email validation
      if (!validateEmail(email)) {
          alert('Please enter a valid email address');
          return;
      }
      
      // Phone validation (simple check for numbers)
      if (!/^\d+$/.test(phone)) {
          alert('Phone number should contain only digits');
          return;
      }
      
      // Password validation
      if (password.length < 8) {
          alert('Password should be at least 8 characters long');
          return;
      }
      
      // If all validations pass
      alert('Registration successful!');
      // Here you would typically send the data to a server
      // registrationForm.submit();
  });
  
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});