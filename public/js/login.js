const signUpFormHandler = async (e) => {

  e.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();



  if(username && email && password) {

    const response = await fetch('/api/users', {
      method: 'POST', 
      body: JSON.stringify({ username, email, password }),
      header: { 'Content-Type': 'application/json' },
    });
    
    

    if(response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);

    }
  }
};

// event listeners for login and signup
document
  .querySelector("#login-form")
  .addEventListener("submit", login);

sigunpForm.addEventListener('submit', signUp);

cancelBtn.addEventListener('click', () => {
  document.location.replace('/')
});
document.querySelector('#sign-up-form')
    .addEventListener('submit', signUpFormHandler);