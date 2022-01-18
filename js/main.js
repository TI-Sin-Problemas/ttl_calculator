const ttlInput = document.getElementById("ttl-input-number");
const timeInput = document.getElementById("ttl-input-time");

ttlInput.addEventListener("change", (element) => {
  const ttl = element.target.value;
  timeInput.value = ttlToTimeFormat(ttl);
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
