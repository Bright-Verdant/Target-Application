const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/users/login');
  } else {
    alert('Failed to log out.');
  }
};

const a = document.querySelector('#logout')
a.addEventListener('click', logout);
