"use strict";

function clock(timeS, timeE) {
  let cucu = "";

  for (let time = 1; time <= 24; time++) {
    if (time === 13) {
      cucu = "";
    }

    cucu = cucu + " Cucú.";

    if (time >= timeS && time <= timeE) {
      console.log(time + cucu);
    }
  }
}

clock(8, 21);
