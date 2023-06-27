const uuid = require("../../utils/uuid");
const sigunpForm = document.querySelector('#sign-up-form');
const cancelBtn = document.querySelector('#cancel-btn');

// handle login
async function login(event) {
  event.preventDefault();
  // collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // if successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

// handle signup
async function signUp (event) {
  event.preventDefault();
  // collect values from the login signup form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const user_id = uuid();

  if (username && email && password) {
    // send a POST request to the API endpoint
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        user_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      // if successful, redirect the browser to the profile page
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
}

// event listeners for login and signup
document
  .querySelector(".login-form")
  .addEventListener("submit", login);

sigunpForm.addEventListener('submit', signUp);

cancelBtn.addEventListener('click', () => {
  document.location.replace('/')
});