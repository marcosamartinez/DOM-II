import { contentType } from "express/lib/response";
import "./less/index.less";

// Your code goes here!

//1 - Copy
window.addEventListener("copy", () => {
  navigator.clipboard.readText().then((text) => {
    heading.textContent += text;
  });
});

//2 - Click
document.body.addEventListener("click", (evt) => {
  evt.target.classList.toggle("mirror");
});
// 3 DoubleClick
document.body.addEventListener("dblclick", (evt) => {
  evt.target.outerHTML = " ";
});
// 4 Keydown
window.addEventListener("keydown", (evt) => {
  if (evt.key == 4) {
    document.body.innerHTML = "<h1>You have been kicked from the database</h1>";
  }
});
//5 load
window.onload = function (evt) {
  console.log(`event ${evt.type} fired! Ready to go!`);
  const heading = document.querySelector("h1");
  heading.textContent = "READY TO GO!!";
};

// 6 Mouse move
document.body.addEventListener("mousemove", (evt) => {
  const { clientX, clientY } = evt;
});

// 7 mouseenter
// 8 mouseleave

const destinations = document.querySelectorAll(".destination");
for (let destination of destinations) {
  destination.addEventListener("mouseenter", (evt) => {
    destination.style.fontweight = "bold";
  });
  destination.addEventListener("mouseleave", () => {
    setTimeout(() => {
      destination.style.fontweight = "initial";
    }, 500);
  });
}
