let timer = document.querySelector(".time");

const showTime = () => {
  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  if (h.length < 2) h = "0" + h;
  if (m.length < 2) m = "0" + m;
  if (s.length < 2) s = "0" + s;

  timer.innerHTML = `${h}:${m}:${s}`;
};

showTime();
setInterval(showTime, 1000);
