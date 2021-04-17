import { handleSubmit } from './js/formHandler'
import './styles/style.scss';

const button = document.getElementById('submit');
button.addEventListener('click', () => handleSubmit());