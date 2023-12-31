chrome.contextMenus.create({
    id:"GuitarMan",
    title:"GuitarMan",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        //const variableName = info.selectionText;
        //chrome.tabs.create({ url: `$variableName}` });
        const tellme = info.selectionText;
        chrome.tabs.create({ url: `https://www.ultimate-guitar.com/search.php?search_type=title&value=${tellme}` });
        chrome.tabs.create({ url: `https://www.youtube.com/results?search_query=${tellme}` });
        chrome.tabs.create({ url: `https://open.spotify.com/search/${tellme}` });
    }   
});
