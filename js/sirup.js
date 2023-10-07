let x = 0;
let y = 0;

let targetX = 0;
let targetY = 0;

const speed = 0.1;

const contentAll = document.querySelectorAll(".contWrap div");

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
  y = e.pageY - window.innerHeight / 2;

  console.log(x, y);

  handleMouseMove();
});

const handleMouseMove = () => {
  human.style.transform = `translateX(${-targetX / 20}px)`;
  shadow.style.transform = `translateX(${targetX / 35}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  textImg.style.transform = `translateX(${-targetX / 10}px)`;
};

const loop = () => {
  targetX += (x - targetX) * speed;

  handleMouseMove();
  window.requestAnimationFrame(loop);
};
loop();
