var location = window.location;
var currentLoc = location.href;
var newLoc = "https://xcancel.com" + // don't just replace x.com with xcancel.com since mobile.xcancel.com does not exist
	location.pathname; // skip a potential query string since it is not supported by xcancel
console.log("redirect from " + currentLoc + " to " + newLoc);
location.replace(newLoc);
