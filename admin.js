// admin_script.js
function validateLogin(event) {
  event.preventDefault(); // Prevent form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "admin" && password === "admin123") {
    alert("Login Successful");
    window.location.href = "admin_dashboard.html"; // Redirect to admin dashboard
  } else {
    alert("Invalid Credentials");
  }
}
