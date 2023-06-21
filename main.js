
const root = document.querySelector(":root");
const colors = {
  bg: getComputedStyle(root).getPropertyValue("--bg"),
  text: getComputedStyle(root).getPropertyValue("--text"),
};

const textColorElems = document.querySelectorAll("#textColor");
const bgColorElems = document.querySelectorAll("#backgroundColor");

console.log(textColorElems);
for (let i of textColorElems)
  i.style.fill = colors.text;

for (let i of bgColorElems)
  i.style.fill = colors.bg
