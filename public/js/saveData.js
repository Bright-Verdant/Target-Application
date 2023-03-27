
const saveCardHandler = async () => {
  const tNumber = document.getElementById('tNumber').innerText;
  const address = document.getElementById('address').innerText;
  const cityStatePostalEl = document.getElementById('cityStatePostalEl').innerText;

  const data = {
    tNumber,
    address,
    cityStatePostalEl,
  };

  fetch('/api/saveCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to save card');
      }
      return response.json();
    })
    .then(data => {
      console.log('Card saved:', data);
    })
    .catch(error => {
      console.error('Error saving card:', error);
    });

};
const saveButton = document.getElementById('saveButton')
// saveButton.addEventListener('click', ()

  saveButton.addEventListener('click', saveCardHandler);