// Importing the handleSubmit function from formHandler.js
import { handleSubmit } from './js/formHandler';

// Importing SCSS files for styling
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Importing the ValidUrl function from CheckURL.js
import { ValidUrl } from './js/CheckURL';

// Adding an event listener to the form submission
document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Preventing the default form submission behavior
    await handleSubmit(event); // Calling the handleSubmit function when the form is submitted
});

// Alerting a message to indicate existence
alert("I EXIST");

// Logging a message to the console
console.log("CHANGE!!");

// Exporting ValidUrl and handleSubmit for use in other modules
export { ValidUrl, handleSubmit };
