const refs = {
  time: document.getElementById("time"),
};
// timer
const { time } = refs;

const getCurrentTime = () => {
  const today = new Date().toUTCString();
  time.innerHTML = today;
};

document.addEventListener("load", getCurrentTime());

setInterval(getCurrentTime, 1000);
