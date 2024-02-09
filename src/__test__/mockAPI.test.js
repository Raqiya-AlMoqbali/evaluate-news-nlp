// Import the module to test
const mockAPI = require("../src/server/mockAPI");

// Describe block for the test suite
describe("Testing the mockAPI module", () => {
    // Test block for the mockAPI module
    test("Testing the mockAPI response", () => {
        // Define the expected output
        const expectedResponse = {
            'title': 'test json response',
            'message': 'this is a message',
            'time': 'now'
        };

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(mockAPI).toEqual(expectedResponse);
    });
});
