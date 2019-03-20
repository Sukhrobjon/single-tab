// chrome.tabs.getAllInWindow(null, function (tabs) {
//     for (var i = 0; i < tabs.length; i++) {
//         chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });
//     }
// });
// 

const log = chrome.extension.getBackgroundPage().console.log
const something = chrome.tabs.query({currentWindow: true}, function (tabs) {
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
        el.className += "tabBox"
        el.id = tab.id
        // el.addEventListener("click", function () {console.log(el.id)});
        
        container.appendChild(el)
    })

    // TODO: Display this in the extension DOM
    document.querySelector('body').appendChild(container)
    const tabBoxId = document.querySelectorAll(".tabBox").forEach( (tabBox)=> {
        tabBox.addEventListener("click", function () {
            log(tabBox.id)
            chrome.tabs.update(tabBox.id, {active: true})
        });
    } )
    
    // htmlArray = ['<h1>...', '<h1>...', '<h1>...', ...]
    log(tabs)
    
    
    function changeTab(id) {
        console.log(id)
        chrome.tabs.update(id, { highlighted: true })

    }

    
});

// 