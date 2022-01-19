const ttlInput = document.getElementById("ttl-input-number");
const timeInput = document.getElementById("ttl-input-time");

ttlInput.addEventListener("change", (element) => {
  const ttl = element.target.value;
  timeInput.value = ttlToTimeFormat(ttl);
});

timeInput.addEventListener("change", (element) => {
  const time = element.target.value;
  ttlInput.value = timeToTtl(time);
});

const ttlToTimeFormat = (ttl) => {
  let hours = Math.floor(ttl / 3600);
  let minutes = Math.floor((ttl - hours * 3600) / 60);
  let seconds = ttl - hours * 3600 - minutes * 60;

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
};

const timeToTtl = (time) => {
  const timeArray = time.split(":");

  const hours = parseInt(timeArray[0]);
  const minutes = parseInt(timeArray[1]);
  const seconds = timeArray[2] ? parseInt(timeArray[2]) : 0;

  return hours * 3600 + minutes * 60 + seconds;
};

const now = new Date();
document.getElementById("copyright-year").innerText = now.getFullYear();
