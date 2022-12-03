const root = document.querySelector(":root");
const ctp = {
  latte: {
    "--bg-0": "#DCE0E8",
    "--bg-1": "#E6E9EF",
    "--overlay-2": "#7c7f93",
    "--nav-r": 230, 
    "--nav-g": 233,
    "--nav-b": 239,
    "--bg-2": "#EFF1F5",
    "--txt-color": "#4C4F69",
    "--teal": "#179299",
    "--blue": "#1E66F5",
    "--sky": "#04A5E5",
  },
  mocha: {
    "--bg-0": "#161320",
    "--bg-1": "#1A1826",
    "--overlay-2": "#9399b2",
    "--nav-r": 17,
    "--nav-g": 17,
    "--nav-b": 27,
    "--bg-2": "#1E1E2E",
    "--txt-color": "#D9E0EE",
    "--teal": "#B5E8E0",
    "--blue": "#96CDFB",
    "--sky": "#89DCEB",
  },
};
let vars = [
  "--bg-0",
  "--bg-1",
  "--overlay-2",
  "--nav-r",
  "--nav-g",
  "--nav-b",
  "--bg-2",
  "--txt-color",
  "--teal",
  "--blue",
  "--sky",
];
let isDarkTheme = true;

const themeChanger = () => {
  for (let i of vars)
    root.style.setProperty(i, isDarkTheme ? ctp.latte[i] : ctp.mocha[i]);
  document.querySelector("#themeChanger").textContent = isDarkTheme
    ? "☽"
    : "☀️";

  for (i of document.querySelectorAll("img:not(#pfp)"))
    i.src = `assets/${isDarkTheme ? "latte" : "mocha"}/${i.id}.svg`;

  isDarkTheme = !isDarkTheme;
};
