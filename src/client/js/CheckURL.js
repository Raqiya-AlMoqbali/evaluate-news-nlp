
export function ValidUrl(value) {
    console.log("URL:", value); // Check if the URL is being passed correctly
    var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
    console.log("URL Pattern Test Result:", urlPattern); // Check the result of the URL pattern test
    var regexp = new RegExp (urlPattern)
    return regexp.test(value)
}
