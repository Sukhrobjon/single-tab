// chrome.tabs.getAllInWindow(null, function (tabs) {
//     for (var i = 0; i < tabs.length; i++) {
//         chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });
//     }
// });
// 

const log = chrome.extension.getBackgroundPage().console.log
const something = chrome.tabs.query({}, function (tabs) {
    // tabs = [{}, {}, {}]
    const container = document.createElement('div')
    container.style.display = 'flex' // display: flex
    container.style.justifyContent = 'flex-start'
    container.style.flexWrap = 'wrap'

    const elArray = tabs.forEach((tab) => {
        const el = document.createElement('div')
        el.style.width = '100px' // width: 100px
        el.style.height = '100px'
        el.style.backgroundColor = 'red'
        el.style.margin = '2px'
        container.appendChild(el)
    })

    // TODO: Display this in the extension DOM
    document.querySelector('body').appendChild(container)

    // htmlArray = ['<h1>...', '<h1>...', '<h1>...', ...]
    log(tabs)
});