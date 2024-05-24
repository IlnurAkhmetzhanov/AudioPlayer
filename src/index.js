import { weathers } from "./data";
import "./index.scss";

const root = document.querySelector("#weathers");
const range = document.querySelector("#range");
const audio = new Audio();
audio.volume = 0;
let currentWeather = "";
let currentSound = "";
const weathersRef = [];

range.addEventListener("input", function (e) {
  audio.volume = e.currentTarget.value / 100;
});

const resetIcons = (refs) => {
  refs.forEach((e, index) => {
    e.src = weathers[index].icon;
  });
};

function renderItem(item, index) {
  const app = document.getElementById("app");
  const weatherContainer = document.createElement("div");
  const weatherIcon = document.createElement("img");
  weatherContainer.className = "weatherContainer";
  weatherIcon.className = "weatherIcon";
  weatherIcon.src = item.icon;
  weatherContainer.style.backgroundImage = `url(${item.bg})`;
  weathersRef.push(weatherIcon);

  weatherContainer.onclick = () => {
    resetIcons(weathersRef);
    currentWeather = item.name;
    app.style.backgroundImage = `url(${item.bg})`;

    if (
      audio.src &&
      !audio.src.includes(item.sound.slice(1, item.sound.length))
    ) {
      weatherIcon.src = "./icons/pause.svg";
      audio.src = item.sound;
      audio.play();
      return;
    }

    if (currentWeather === item.name && audio.paused) {
      weatherIcon.src = "./icons/pause.svg";
      audio.src = item.sound;
      audio.play();
      return;
    }

    if (currentWeather === item.name && !audio.paused) {
      weatherIcon.src = item.icon;
      audio.pause();
      return;
    }
  };
  weatherContainer.append(weatherIcon);
  root.append(weatherContainer);
}

weathers.forEach(renderItem);
