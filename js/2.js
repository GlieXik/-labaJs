const refs = {
  func: document.getElementById("function"),
  x: document.getElementById("x"),
  ansfer: document.getElementById("ansfer"),
  calc: document.getElementById("calc"),
};
const { func, x, ansfer, calc } = refs;
calc.addEventListener("click", (e) => {
  const repalaceX = func.value.replace("x", x.value.toString());
  const res = eval(repalaceX);
  ansfer.innerHTML = res;
});
