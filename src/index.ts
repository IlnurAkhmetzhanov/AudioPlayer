import { Weather } from "./data";
import { weathers } from "./data";
import "./index.scss";

const root: Element = document.querySelector("#weathers");
const range: Element = document.querySelector("#range");
const audio: HTMLAudioElement = new Audio();
audio.volume = 0;
let currentWeather: string = "";
const weathersRef: HTMLImageElement[] = [];

range.addEventListener("input", function (e: InputEvent) {
  const element = e.currentTarget as HTMLInputElement;
  const value: string = element.value;
  audio.volume = Number(value) / 100;
});

const resetIcons = (refs: HTMLImageElement[]) => {
  refs.forEach((e: HTMLImageElement, index: number) => {
    e.src = weathers[index].icon;
  });
};

function renderItem(item: Weather, index: number) {
  const app: HTMLElement = document.getElementById("app");
  const weatherContainer: HTMLDivElement = document.createElement("div");
  const weatherIcon: HTMLImageElement = document.createElement("img");
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
