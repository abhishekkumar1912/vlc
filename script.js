const videoInputClass = document.querySelector(".videoInput");
const videoInputId = document.querySelector("#videoInput");
const openMenu = document.querySelector(".openMenu");
const mainClass = document.querySelector(".mainClass");
const playmenu = document.querySelector(".play-menu");
const pausemenu = document.querySelector(".pause-menu");
const volumeUp = document.querySelector(".volumeUp");
const volumeDown = document.querySelector(".volumeDown");
const speedDown = document.querySelector(".speedDown");
const speedUp = document.querySelector(".speedUp");
const toast = document.querySelector(".toast");

const showToast = (msg) => {
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => {
  toast.style.display="none";
  }, 2000);
};
const videoInputHandler = () => {
  videoInputClass.click();
};

const handleChange = (obj) => {
  console.log(obj);
  const selectedVideo = obj.target.files[0];
  console.log(selectedVideo);
  //  src -> base64
  const link = URL.createObjectURL(selectedVideo);
  const videoElement = document.createElement("video");
  videoElement.src = link;
  videoElement.setAttribute("class", "video");
  mainClass.appendChild(videoElement);
  videoElement.play();
  videoElement.volume = 0.5;
};
const pausehandler = () => {
  console.log("puasehandler");
  const videoElement = document.querySelector(".mainClass .video");
  if (videoElement !== null) {
    videoElement.pause();
  }
};
const playhandler = () => {
  const videoElement = document.querySelector(".mainClass .video");
  if (videoElement !== null) {
    videoElement.play();
  }
};
const playerTempId=()=>{

   }
const volumeDownHandler = () => {
  const videoElement = document.querySelector(".mainClass .video");
  if (videoElement !== null && videoElement.volume >= 0.1) {
    videoElement.volume -= 0.1;

    const msg = (videoElement.volume * 100).toFixed() + "%";
    console.log(msg);
    showToast(msg);
    console.log("volume down", videoElement.volume);
  }
};
const volumeUpHandler = () => {
  const videoElement = document.querySelector(".mainClass .video");

  if (videoElement !== null && videoElement.volume < 0.9) {
    videoElement.volume += 0.1;
    console.log("volumeup", videoElement.volume);
    const msg = (videoElement.volume * 100).toFixed() + "%";
    console.log(msg);
    showToast(msg);
  }
};

const speedDownHandler = () => {
  const videoElement = document.querySelector(".mainClass .video");
  if (videoElement !== null && videoElement.playbackRate >= 0.1) {
    videoElement.playbackRate -= 0.1;

    const msg = (videoElement.playbackRate).toFixed(1) + "X";
    console.log(msg);
    showToast(msg);
    console.log("speedDown", videoElement.playbackRate);
  }
};
const speedUpHandler = () => {
  console.log("speed up ", "spped up");
  const videoElement = document.querySelector(".mainClass .video");
  if (videoElement !== null) {
    videoElement.playbackRate += 0.1;
    const msg = (videoElement.playbackRate).toFixed(1) + "X";
    console.log(msg);
    showToast(msg);
    console.log("speedUp", videoElement.playbackRate);
  }
};
pausemenu.addEventListener("click", pausehandler);
openMenu.addEventListener("click", videoInputHandler);
videoInputClass.addEventListener("change", handleChange);
playmenu.addEventListener("click", playhandler);
speedDown.addEventListener("click", speedDownHandler);
speedUp.addEventListener("click", speedUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);
volumeUp.addEventListener("click", volumeUpHandler);
