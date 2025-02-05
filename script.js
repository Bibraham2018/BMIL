// Basic JavaScript for form validation and processing

document.getElementById('registration-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  // Simple client-side validation
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const course = document.getElementById('course').value;
  const payment = document.getElementById('payment').value;

  if (!fullName || !email || !course || !payment) {
    alert("Please fill out all fields.");
    return;
  }

  // Mocking a successful registration process
  alert("Registration successful! Proceeding to payment...");
  
  // Redirect to a thank you page or payment gateway (for now, we can redirect to another page)
  window.location.href = 'thankyou.html'; // You can replace this with actual payment gateway code
});
