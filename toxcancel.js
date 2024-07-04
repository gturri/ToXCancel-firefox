var location = window.location;
var currentLoc = location.href;
var newLoc = currentLoc.replace("x.com", "xcancel.com");
console.log("redirect from " + currentLoc + " to " + newLoc);
location.replace(newLoc);
