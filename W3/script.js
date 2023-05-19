// Function to handle form submission
function submitForm() {
  // Get the form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if(name.trim() === '' || email.trim() === '' || password.trim() === ''){
    alert('Please fill all fields');
    return;
  }

  // Create an object with the form data
  var user = {
    name: name,
    email: email,
    password: password
  };

  // Push the user data to local storage
  var userList = JSON.parse(localStorage.getItem('users')) || [];
  userList.push(user);
  localStorage.setItem('users', JSON.stringify(userList));

  // Redirect to the data list page
  window.location.href = 'datalist.html';
}

// Example usage: Add an event listener to the submit button
document.getElementById('submit-btn').addEventListener('click', submitForm);
