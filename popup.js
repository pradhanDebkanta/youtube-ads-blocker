try {
    chrome?.tabs?.query({ active: true, lastFocusedWindow: true  }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, { getHost: true }, response => {
            let uri = response?.host || undefined;
            console.log(uri, "uri");

            let content = document.querySelectorAll(".content");
            if (uri == "www.youtube.com") {
                content[0].innerText = "ads blocker access this page."
            } else {
                content[0].innerText = "ads blocker have not access this page."
            }
            // return true;
        });
    });
} catch (err) {
    console.log(err);
}