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

export default updateUI;