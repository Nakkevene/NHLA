//!const fs = require("fs");
import fs from "fs";


//* Get raw values, remove newlines, convert them to celsius and return
export function temp0() {
  let temp;
  try {
    temp =
      parseInt(
        fs
          .readFileSync("/sys/class/hwmon/hwmon0/temp1_input")
          .toString()
          .replace(/[\r\n]+/gm, "")
      ) / 1000;
  } catch (err) {
    temp = "TEMP0_ERR";
  }

  return temp;
}

export function temp1() {
  let temp;
  try {
    temp =
      parseInt(
        fs
          .readFileSync("/sys/class/hwmon/hwmon1/temp1_input")
          .toString()
          .replace(/[\r\n]+/gm, "")
      ) / 1000;
  } catch (err) {
    temp = "TEMP1_ERR";
  }

  return temp;
}

export function temp2() {
  let temp;
  try {
    temp =
      parseInt(
        fs
          .readFileSync("/sys/class/hwmon/hwmon2/temp1_input")
          .toString()
          .replace(/[\r\n]+/gm, "")
      ) / 1000;
  } catch (err) {
    temp = "TEMP2_ERR";
  }

  return temp;
}

export function temp3() {
  let temp;
  try {
    temp =
      parseInt(
        fs
          .readFileSync("/sys/class/hwmon/hwmon0/temp3_input")
          .toString()
          .replace(/[\r\n]+/gm, "")
      ) / 1000;
  } catch (err) {
    temp = "TEMP3_ERR";
  }

  return temp;
}
