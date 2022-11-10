const refs = {
  input: document.querySelector("input[name = image_uploads]"),
  firstImg: document.querySelector("input[name = firstImg]"),
  secondImg: document.querySelector("input[name = secondImg]"),
  imgContainer: document.querySelector(".images"),
  changePos: document.querySelector("#changePos"),
};
const { input, imgContainer, firstImg, secondImg, changePos } = refs;
var allImg;
const updateImageDisplay = () => {
  const curFiles = input.files;
  const image = new Image(200);
  image.src = window.URL.createObjectURL(curFiles[0]);
  imgContainer.appendChild(image);
  allImg = document.querySelectorAll("img");
};

const changer = () => {
  if (!allImg) return;
  const arrAllImg = Array.from(allImg);

  arrAllImg[firstImg.value] = arrAllImg.splice(
    secondImg.value,
    1,
    arrAllImg[firstImg.value]
  )[0];
  arrAllImg.map((e) => {
    imgContainer.appendChild(e);
  });
};

input.addEventListener("change", updateImageDisplay);
changePos.addEventListener("click", changer);
