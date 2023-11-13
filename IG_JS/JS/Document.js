const outputP = function(message) {
    var tag = "<p>" + message + "</p>"
    document.write(tag)
}

document.write("<h1>Profile</h1>");
document.write("<h2>Name</h2>");
document.write("<p>TD</p>");
document.write("<h2>Favorite</h2>");

outputP("Travel");
outputP("Game");
outputP("Sport");
// Window title
document.title = "My Profile";
// Body Property
document.body.style.background = "#fffaf0";
document.body.style.color = "#808080";

// Image
const imagePath = "Images/Aphelios_0.jpg";
// Img src
var tag = `<img src=>"` + imagePath + `">`;
// Literal
tag = `<img src="${imagePath}">`;
document.write(tag);
