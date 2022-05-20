console.log('hi add blocer work');

// for add skip purpose 
let inv1 = setInterval(() => {
    let addskipper = document.querySelectorAll(".ytp-ad-skip-button-slot");
    let skipperBtn = addskipper[0];
    skipperBtn?.click();
}, 500);

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
}, 1000);

// for another ads blocker 
let inv4 = setInterval(() => {
    let addBanner = document.querySelectorAll('.sparkles-light-cta');
    if (addBanner[0]) {
        addBanner[0].style.display = "none";
    }
}, 1000);
