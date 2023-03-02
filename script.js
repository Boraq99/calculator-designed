let display = document.getElementById("screen");

const wipe = () => {
  display.value = "";
};

const show = (n) => {
  display.value += n;
};

const calc = () => {
  display.value = eval(display.value);
};

const remove = () => {
  let value = display.value;
  value = value.slice(0, -1);
  display.value = value;
};
