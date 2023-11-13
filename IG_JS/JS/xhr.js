function getApiURL() {
    const currentURL = location.href;
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    console.log(currentURL);
    console.log(fileName);
    
    return baseURL;
}

const API_URL = getApiURL() + 'Data/persons.json';
console.log(API_URL);
// XMLHttpRequest instance
const xhr = new XMLHttpRequest();
// Get URL
xhr.open("GET", API_URL, true);

// Result from Server
xhr.onload = function() {
    const json = xhr.responseText;
    console.log(json)
}
// GO
xhr.send();
