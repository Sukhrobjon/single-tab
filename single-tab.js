// const log = chrome.extension.getBackgroundPage().console.log
const something = chrome.tabs.query({currentWindow: true}, function (tabs) {

    const container = document.createElement('div')
    container.style.display = 'flex' // display: flex
    container.style.justifyContent = 'flex-start'
    container.style.flexWrap = 'wrap'
    container.className = "box-container"

    
    // creating each box and adding its properties
    const elArray = tabs.forEach((tab) => {
        
        // parent div for element
        const el = document.createElement('div')
        el.style.width = '30%' 
        el.style.height = '100px'
        el.style.margin = '2px'
        
        
        // ICON
        const imgBox = document.createElement('div')
        imgBox.style.justifyContent = "center"
        
        var img = document.createElement("img");
        img.src = tab.favIconUrl
        
        img.style.height = "40px"
        imgBox.appendChild(img)
        el.appendChild(imgBox)

        // TITLE
        var tabTitle = document.createElement("h3")
        tabTitle.innerHTML = tab.title

        el.appendChild(tabTitle)

        el.className += "tabBox"
        el.id = tab.id
        el.tabIndex = tab.index
        // el.addEventListener("click", function () {console.log(el.id)});
        
        container.appendChild(el)
        

    })

    // TODO: Display this in the extension DOM
    document.querySelector('body').appendChild(container)
    const tabBoxId = document.querySelectorAll(".tabBox").forEach( (tabBox)=> {
        tabBox.addEventListener("click", function () {
            console.log(tabBox.id)
            chrome.tabs.update(Number(tabBox.id), { active: true})
        });
    } )

    console.log(tabs)
    
    
    var numberOfTabs = tabs.length
    console.log("tab length: " + numberOfTabs)
    // document.getElementById("numberOfTabs").innerHTML = tabs.length
});

