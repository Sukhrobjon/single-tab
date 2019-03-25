// chrome.browserAction.setIcon({
//     path: "stack - icon.png"
// });
// const numberOftabs = chrome.tabs.query({ currentWindow: true}, function (tabs) {
//     return tabs.lenght
// })
chrome.browserAction.setBadgeBackgroundColor({
    color: [255, 0, 0, 255]
});
// chrome.browserAction.setBadgeText({
//     text: '+numberOftabs+'
// });

chrome.storage.onChanged.addListener(function (changes, namespace) {
    chrome.browserAction.setBadgeText({"text": "hi"});
});