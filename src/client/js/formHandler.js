import updateUI from './updateUI';

const handleSubmit = () => {

    const txt = document.getElementById('txt').value;

    fetch('http://localhost:8080/language', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(txt)
    })
    .then(response => response.json())
    .then((res) => {
        updateUI(res);
    });
}

export default handleSubmit;
