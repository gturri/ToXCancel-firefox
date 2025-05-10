"use strict";

function redirect(requestDetails) {
	const originalUrl = new URL(requestDetails.url);
	const redirectUrl =
		"https://xcancel.com" + // don't just replace x.com with xcancel.com since mobile.xcancel.com does not exist
		originalUrl.pathname; // skip a potential query string since it is not supported by xcancel
	console.log(`redirect from ${originalUrl} to ${redirectUrl}`);
	return { redirectUrl: redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{
		urls: ["*://*.x.com/*"],
		types: ["main_frame"],
	},
	["blocking"],
);
