// "https://www.youtube.com/*"
// data.host = "www.youtube.com"

const data = {
    host: window.location.host
};
// console.log(chrome.runtime.onMessage.hasListeners(), "has listen")
if (!chrome.runtime.onMessage.hasListeners()) {
    chrome.runtime.onMessage.addListener(
        (request, sender, sendResponse) => {
            if (request.getHost)
                sendResponse({ host: data.host });
        }
    )
};


if (data.host = "www.youtube.com") {
    // for add skip purpose 
    let inv1 = setInterval(() => {
        let addskipper = document.querySelectorAll(".ytp-ad-skip-button-slot");
        let skipperBtn = addskipper[0];
        skipperBtn?.click();
    }, 300);

    // for video overlay ads block
    let inv2 = setInterval(() => {
        let overlayAddBtn = document.querySelectorAll(".ytp-ad-overlay-close-button");
        overlayAddBtn[0]?.click();
    }, 500);

    // for compainion ads block
    let inv3 = setInterval(() => {
        let addBanner = document.querySelectorAll("#companion");
        if (addBanner[0]) {
            addBanner[0].style.display = "none";
        }
    }, 500);

    // for another ads blocker 
    let inv4 = setInterval(() => {
        let addBanner = document.querySelectorAll('.sparkles-light-cta');
        if (addBanner[0]) {
            addBanner[0].style.display = "none";
        }
    }, 500);

    // for block search playlist ads
    let inv5 = setInterval(() => {
        let adsBanner = document.querySelectorAll('#main-container');
        if (adsBanner.length) {
            adsBanner.forEach(el => {
                el.style.display = "none";
            });
        }
    }, 500);

    // for block search playlist ads
    let inv6 = setInterval(() => {
        let adsBanner = document.querySelectorAll('.ytd-promoted-sparkles-text-search-renderer');
        if (adsBanner.length) {
            adsBanner.forEach(el => {
                el.style.display = "none";
            });
        }
    }, 500);

    // for block search playlist ads
    let inv7 = setInterval(() => {
        let adsBanner = document.querySelectorAll('.ytd-promoted-sparkles-web-renderer');
        if (adsBanner.length) {
            adsBanner.forEach(el => {
                el.style.display = "none";
            });
        }
    }, 500);
}
