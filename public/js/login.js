const uuid = require("../../utils/uuid");

// handle login
async function signUpFormHandler(event) {
  event.preventDefault();
  // collect values from the login form
  const username = document.querySelector("#username-login").value.trim();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  const randomId = uuid.v4();

  if (username && email && password) {
    // send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        randomId,
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

document
  .querySelector(".login-form")
  .addEventListener("submit", signUpFormHandler);
