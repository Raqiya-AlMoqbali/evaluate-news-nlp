// Import the ValidUrl function from the CheckURL module
import { ValidUrl } from './CheckURL';

// Define a function to make a POST request
const post = async (url = '', data = {}) => {
    try {
        // Send a POST request to the specified URL
        console.log('Making POST request to:', url);
        const response = await fetch(url, {
            method: 'POST', // Using the POST method
            credentials: 'same-origin', // Sending cookies and credentials if the request is being made from the same origin
            mode: 'cors', // Setting the mode to 'cors' for cross-origin requests
            headers: {
                'Content-Type': 'application/json',  // Setting the content type to JSON
            },
            body: JSON.stringify(data), // Converting the data object to a JSON string and including it in the request body
        });
        
        // Parse the JSON response
        const responseData = await response.json();
        console.log('Response data:', responseData);
        return responseData;
    } catch (error) {
        // Handle any errors that occur during the process
        console.log('Error:', error);
    }
};

// Define a function to handle form submission
const handleSubmit = async () => {
    // Get the URL input value from the DOM
    const Url = document.getElementById('url').value;
    console.log('Submitted URL:', Url);
    // Check if the URL is valid
    if (ValidUrl(Url)) {
        console.log("URL is valid:", Url);
        // Make a POST request with the URL data
        const postData = await post('http://localhost:8080/api', { url: Url });
        console.log('Post data:', postData);

        // Update the DOM with the response data
        document.getElementById('agreement').innerHTML = `Agreement: ${postData.agreement}`;
        document.getElementById('score_tag').innerHTML = `Score Tag: ${postData.score_tag}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${postData.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${postData.irony}`;
    } else {
        // If the URL is invalid, display an alert
        console.log("Invalid URL:", Url);
        alert("Please enter a valid URL.");
    }
};

// Export the handleSubmit function as the default export
export default handleSubmit;
