// Function to handle form submission
function submitForm() {
  // Get the form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Check if any field is empty
  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    alert('Please fill all fields');
    return;
  }

  // Create an object with the form data
  var user = {
    name: name,
    email: email,
    password: password
  };

  // Perform AJAX request to send data to the server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/submit', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Redirect to success page upon successful submission
        window.location.href = 'datalist.html';
      } else {
        // Display an error message if the submission failed
        alert('An error occurred while submitting the form. Please try again.');
      }
    }
  };

  // Send the form data as JSON in the request body
  xhr.send(JSON.stringify(user));
}

// Add event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', submitForm);
