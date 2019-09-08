const plus1 = qs("#plus1");
const plus2 = qs("#plus2");
const plus3 = qs("#plus3");
const plus4 = qs("#plus4");

addClickEventOnPlusButton(plus1);
addClickEventOnPlusButton(plus2);
addClickEventOnPlusButton(plus3);
addClickEventOnPlusButton(plus4);

function addClickEventOnPlusButton(element) {
  let isOpen = false;
  element.addEventListener("click", event => {
    const plusMinusButton = element.children[0];
    const text = element.nextElementSibling;
    const textWrapper = element.nextElementSibling.children[0];

    if (!isOpen) {
        plusMinusButton.innerText = "-";
      text.style.height = "70px";
      textWrapper.style.display = "block";
      setTimeout(() => {
        textWrapper.style.opacity = "1";
        textWrapper.style.transform = "translateY(0)";
      }, 0);
    } else {
        plusMinusButton.innerText = "+";
      text.style.transition = "all 500ms 500ms";
      text.style.height = "0";
      textWrapper.style.transition = "opacity 500ms";
      textWrapper.style.opacity = "0";
      setTimeout(() => {
        textWrapper.style.transform = "translateY(-45%)";
        textWrapper.style.transition = "all 500ms 300ms";
        text.style.transition = "all 500ms";
      }, 500);
    }
    isOpen = !isOpen;
  });
}


function dd(data) {
  console.log(data);
}
function qs(selector) {
  return document.querySelector(selector);
}
