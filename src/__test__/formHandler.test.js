// Import the js file to test 
import 'bable-polyfill'

// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";

// Describe block for the test suite
describe("Testing the submit functionality", () => {
    // Test block for the handleSubmit function
    test("Testing the handleSubmit() function", () => {
        // Define the input for the function
        const event = {
            preventDefault: jest.fn() // Mocking preventDefault function
        };

        // Define the expected output (in this case, the function should be defined)
        const expectedResult = undefined;

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(handleSubmit(event)).toEqual(expectedResult);

        // Check if preventDefault function has been called
        expect(event.preventDefault).toHaveBeenCalled();
    });
});
