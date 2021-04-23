import updateUI from './updateUI';
import textValidation from './textValidation';

const handleSubmit = () => {

    const txt = document.getElementById('txt').value;

    if(textValidation(txt)) {
        const payload = { txt };

        fetch('http://localhost:8080/language', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(response => updateUI(response));
    }
}

export default handleSubmit;
