const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#log-usr').value.trim();
  const password = document.querySelector('#log-pass').value.trim();

  console.log(username, password);

  if(username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST', 
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }

}

document.querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);

document.querySelector('#btn-cancl')
    .addEventListener('click', () => {
      document.location.replace('/')
    });