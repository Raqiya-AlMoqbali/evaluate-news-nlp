// Import the js file to test
import { ValidUrl } from '../client/js/checkURL'

// Describe block for the test suite
describe("Testing URL Validation Function", () => {
    // Test block for the ValidUrl function
    test("Testing the ValidUrl() function", () => {
        // Define the input for the function
        const validURL = "https://example.com";
        const invalidURL = "not_a_url";

        // Define the expected output
        const expectedResultValid = true;
        const expectedResultInvalid = false;

        // Check if the function produces the expected output
        expect(ValidUrl(validURL)).toEqual(expectedResultValid);
        expect(ValidURL(invalidURL)).toEqual(expectedResultInvalid);
    });
});
