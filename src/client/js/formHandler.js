import updateUI from './updateUI';
import urlValidation from './urlValidation';

const handleSubmit = ()  => {

    const url = document.getElementById('url').value;
    const payload = { url };

    fetch('http://localhost:8080/language', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(response => updateUI(response));
}

export default handleSubmit;
