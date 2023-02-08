let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    display.value = eval(display.value);
}

function del() {
    let screen = document.getElementById("screen");
    let value = screen.value;
    screen.value = value.slice(0, -1);
  }
  