const nextDome: HTMLElement = document.getElementById("next");
const prevDome: HTMLElement = document.getElementById("prev");
const carouselDom: Element = document.querySelector(".carousel");

const listItemDome: Element = document.querySelector(".carousel .list");
const thumbnailDome: Element = document.querySelector(".carousel .thumbnail");
nextDome.onclick = function () {
  showSlider("next");
};
prevDome.onclick = function () {
  showSlider("prve");
};

const timeRunning = 3000;
const timeAutoNext = 7000;
let runAutoRun = setTimeout(() => {
  nextDome.click();
}, timeAutoNext);
let runTimeOut;
function showSlider(type: string) {
  const istemSlider = document.querySelectorAll(".carousel .list .item");
  const itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");
  if (type === "next") {
    listItemDome.appendChild(istemSlider[0]);
    thumbnailDome.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    const positionLastItem = istemSlider.length - 1;
    listItemDome.appendChild(istemSlider[positionLastItem]);
    thumbnailDome.appendChild(itemThumbnail[positionLastItem]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDome.click();
  }, timeAutoNext);
}
