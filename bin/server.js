import express from "express";
import { exec } from "child_process";
import * as temps from "./temp.js";

//* ENTRY
export function NHLAServer(SYN_PORT = 5666) {
  const server = express();

  //? Once connection to / is established
  server.get("/", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/");
    res.send(`NakkenHassuLämpötilaAsema Rootpage\n\nRequest IP:${req.ip}`);
  });

  //? Once connection to /api/temp is established
  server.get("/api/temp", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp");
    res.send(
      `${temps.temp0()}\n${temps.temp1()}\n${temps.temp2()}\n${temps.temp3()}`
    );
  });

  //? Once connection to /api/neofetch is established
  let neofetching = false;
  server.get("/api/neofetch", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/neofetch");

    if (!neofetching) {
      neofetching = true;
      Neofetch()
        .then((data) => {
          res.send(toString(data));
        })
        .catch((err) => {
          res.send(toString(err));
        });
      neofetching = false;
    }
  });

  async function Neofetch() {
    exec('"neofetch" --stdout', (error, stdout, stderr) => {
      if (error) return Promise.reject(error);
      if (stderr) return Promise.reject(stderr);
      Promise.resolve(stdout);
    });
  }

  //? Called once server is up
  server.listen({ port: SYN_PORT }, () => {
    Logger(`NHLA running on ${SYN_PORT}.`, "LISTENER");
  });
}

//* World's worst logging system (stdout only)
function Logger(data, route) {
  let h, m, s;
  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();

  console.log(`[${h}:${m}:${s}] [${route}] ${data}`);

  return;
}
