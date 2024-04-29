// Como no conocía la formula usé el de ejemplo
// Para no entregar tal cual, estuve practicando clases.

// Variables constantes
const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Class Reloj
class clock {
  constructor() {
    this.currentTime = 0;
  }
  getSecondsSinceStartOfDay() {
    this.currentTime =
      new Date().getSeconds() +
      new Date().getMinutes() * 60 +
      new Date().getHours() * 3600;
    return this.currentTime;
  }
  getHourHandAngle(time) {
    time %= 43200; // seconds in 12 hours
    return ((360 * time) / 43200 + 180) % 360;
  }
  getMinuteHandAngle(time) {
    time %= 3600; // seconds in an hour
    return ((6 * time) / 60 + 180) % 360;
  }
  getSecondHandAngle(time) {
    time %= 60; // seconds in a minute
    return (6 * time + 180) % 360;
  }
}

let time = new clock(hour, minutes, seconds);
// Función pricipal
setInterval(() => {
  time.getSecondsSinceStartOfDay();
  // your code here
  hour.style.transform = `rotate(${time.getHourHandAngle(time.currentTime)}deg)`;
  minutes.style.transform = `rotate(${time.getMinuteHandAngle(
    time.currentTime
  )}deg)`;
  seconds.style.transform = `rotate(${time.getSecondHandAngle(
    time.currentTime
  )}deg)`;
}, 1000);
