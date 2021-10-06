// ------------------------- feature -------------------------

const IMAGE_1_LG = document.querySelector(".image_1_lg");
const FEATURE_3_ALL = document.querySelectorAll(".feature_3");

let height_60 = Math.round(window.innerHeight * 0.6);
let height_90 = Math.round(window.innerHeight * 0.9);

if (height_60 % 2 > 0) {
  height_60 += 1;
}

if (height_90 % 2 > 0) {
  height_90 += 1;
}

IMAGE_1_LG.style.height = `${height_60}px`;

for (let FEATURE_3 of FEATURE_3_ALL) {
  FEATURE_3.style.height = `${height_90}px`;
}

// ------------------------- grid -------------------------

const IMAGE_SM_ALL = document.querySelectorAll("div[data-grid='hover']");

for (let image_sm of IMAGE_SM_ALL) {
  image_sm.addEventListener("mouseenter", () => {
    image_sm.children[0].children[1].children[1].classList.add("grid_3_hover");
    image_sm.children[0].children[1].children[2].classList.add("grid_4_hover");
  });
  image_sm.addEventListener("mouseleave", () => {
    image_sm.children[0].children[1].children[1].classList.remove("grid_3_hover");
    image_sm.children[0].children[1].children[2].classList.remove("grid_4_hover");
  });
}
