const log = chrome.extension.getBackgroundPage().console.log
const something = chrome.tabs.query({currentWindow: true}, function (tabs) {

    const container = document.createElement('div')
    container.style.display = 'flex' // display: flex
    container.style.justifyContent = 'flex-start'
    container.style.flexWrap = 'wrap'

    const elArray = tabs.forEach((tab) => {
        const el = document.createElement('div')
        el.style.width = '30%' // width: 100px
        el.style.height = '100px'
        el.style.backgroundColor = '#42f4b6'
        el.style.margin = '2px'
        
        // ICON
        var img = document.createElement("img");
        img.src = tab.favIconUrl
        img.style.height = "70px"
        el.appendChild(img)

        // TITLE
        var tabTitle = document.createElement("h5")
        tabTitle.innerHTML = tab.title
        el.appendChild(tabTitle)

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
            chrome.tabs.update(Number(tabBox.id), { active: true})
        });
    } )

    log(tabs)
    
   

    
});

