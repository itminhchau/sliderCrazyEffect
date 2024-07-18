var nextDome = document.getElementById("next");
var prevDome = document.getElementById("prev");
var carouselDom = document.querySelector(".carousel");
var listItemDome = document.querySelector(".carousel .list");
var thumbnailDome = document.querySelector(".carousel .thumbnail");
nextDome.onclick = function () {
    showSlider("next");
};
prevDome.onclick = function () {
    showSlider("prve");
};
var timeRunning = 3000;
var timeAutoNext = 7000;
var runAutoRun = setTimeout(function () {
    nextDome.click();
}, timeAutoNext);
var runTimeOut;
function showSlider(type) {
    var istemSlider = document.querySelectorAll(".carousel .list .item");
    var itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
    if (type === "next") {
        listItemDome.appendChild(istemSlider[0]);
        thumbnailDome.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    }
    else {
        var positionLastItem = istemSlider.length - 1;
        listItemDome.appendChild(istemSlider[positionLastItem]);
        thumbnailDome.appendChild(itemThumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(function () {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(function () {
        nextDome.click();
    }, timeAutoNext);
}
