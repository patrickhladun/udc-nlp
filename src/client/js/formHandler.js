function handleSubmit() {

    const txt = document.getElementById('txt').value;

    const payload = {
        txt
    }

    fetch('http://localhost:8080/language', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then((res) => {
        updateUI(res);
        console.log(res);
    });
}

const updateUI = (res) => {
    const results = document.getElementById('results');
    results.innerHTML = '';

    const data = {
        language: res.language_list[0].name,
        relevance: res.language_list[0].relevance
    };

    let language = document.createElement('p');

    if(data.language === 'Undetermined') {
        language.innerHTML = `Oh boy, I have no idea what gybrish this is, please try again!`;
    } else {
        language.innerHTML = `I am sure in ${data.relevance}% that this is ${data.language} language!`;
    }

    results.append(language);
}

export { handleSubmit }
