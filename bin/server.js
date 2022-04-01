import express from "express";
import { exec } from "child_process";
import * as temps from "./temp.js";

//* ENTRY
export function NHLAServer(SYN_PORT = 5666) {
  /*const express = require("express");
  const { exec } = require("child_process");
  const server = express();*/
  const server = express();

  //? Once connection to / is established
  server.get("/", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/");
    res.send(`NakkenHassuLämpötilaAsema Rootpage\n\nRequest IP:${req.ip}`);
  });

  //? Once connection to /api/temp is established
  server.get("/api/temp", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp");
    res.send(`${temps.temp0()}\n${temps.temp1()}\n${temps.temp2()}\n${temps.temp3()}`);
  });

  //? Once connection to /api/temp0 is established
  server.get("/api/temp0", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp0");
    res.send(`${ temps.temp0() }`);
  });

  //? Once connection to /api/temp1 is established
  server.get("/api/temp1", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp1");
    res.send(`${ temps.temp1() }`);
  });

  //? Once connection to /api/temp2 is established
  server.get("/api/temp2", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp2");
    res.send(`${ temps.temp2() }`);
  });

  //? Once connection to /api/temp3 is established
  server.get("/api/temp3", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/temp3");
    res.send(`${ temps.temp3() }`);
  });

  //? Once connection to /api/neofetch is established
  server.get("/api/neofetch", (req, res) => {
    Logger(`New connection from ${req.ip}.`, "/api/neofetch");

    let neofetch = "ERROR";
    exec('"neofetch" --stdout', (error, stdout, stderr) => {
      if (error || stderr) neofetch = "STDERR";
      neofetch = stdout;
    });

    //! åäåaw!ÖÅ!?=
    setTimeout(() => {
      res.send(neofetch);
    }, 3500);
  });

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
