document.getElementById('carbonCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const usage = document.getElementById('productUse').value;
    const footprint = usage * 0.05;  // Example calculation
    alert(`Your estimated daily carbon footprint is: ${footprint} kg CO2`);
  });
  function scrollToSection() {
    // Scrolls smoothly to the element with ID 'targetSection'
    document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
  }
// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
      alert('Please fill in all fields.');
  } else {
      // Here you would typically send the data to a server
      console.log('Sending:', { name, email, message });
      alert('Thank you for your message!');
      // Reset the form
      document.getElementById('contactForm').reset();
  }
});
// script.js
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // You can add more complex validation or integration with APIs here
  alert('Thank you for your order!');
  // Optionally, clear the form or do other actions
});
