// function to parse url
function splitURLandReturnComponents(url) {
    // parse the url
    var urlParts = url.split('/');
    var result = {
        protocol: urlParts[0],
        host: urlParts[2],  // host is the 3rd element in the array after splitting the url
    };
    return result;
}


function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
console.log(gcd(48, 18)); // Output: 6