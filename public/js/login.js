const uuid = require("../../utils/uuid");

// handle login
async function signUpFormHandler(event) {
  event.preventDefault();
  // collect values from the login signup form
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const randomId = uuid();

  if (username && email && password) {
    // send a POST request to the API endpoint
    const response = await fetch("/api/users", {
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
