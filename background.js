// chrome.browserAction.setIcon({
//     path: "stack - icon.png"
// });
const numberOftabs = chrome.tabs.query({ currentWindow: true}, function (tabs) {
    console.log('found number of tabs', tabs.length)
    chrome.browserAction.setBadgeText({
        text: `${tabs.length}`
    });
})
chrome.browserAction.setBadgeBackgroundColor({
    color: [10, 20, 0, 10]
});

console.log('numberOftabs -- ')
console.log(numberOftabs)


// chrome.storage.onChanged.addListener
chrome.storage.onChanged.addListener(function (changes, namespace) {
    console.log('on change setting badge')
    const numberOftabs = chrome.tabs.query({ currentWindow: true}, function (tabs) {
        console.log('found number of tabs', tabs.length)
        chrome.browserAction.setBadgeText({
            text: `${tabs.length}`
        });
    })
    
});