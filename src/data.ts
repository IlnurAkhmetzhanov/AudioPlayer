export interface Weather {
  name: string;
  bg: string;
  icon: string;
  sound: string;
}

export const weathers: Weather[] = [
  {
    name: "summer",
    bg: "./backgrounds/summer-bg.jpg",
    icon: "./icons/sun.svg",
    sound: "./sounds/summer.mp3",
  },
  {
    name: "rain",
    bg: "./backgrounds/rainy-bg.jpg",
    icon: "./icons/cloud-rain.svg",
    sound: "./sounds/rain.mp3",
  },
  {
    name: "rain",
    bg: "./backgrounds/winter-bg.jpg",
    icon: "./icons/cloud-snow.svg",
    sound: "./sounds/winter.mp3",
  },
];
