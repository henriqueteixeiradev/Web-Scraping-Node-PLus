"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_puppeteer = __toESM(require("puppeteer"));
(async () => {
  const browser = await import_puppeteer.default.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-maximized"]
  });
  const page = await browser.newPage();
  await page.goto("https://labcard.com.br/cartaoplussaude/login.php");
  await page.waitForSelector('input[name="usuario"');
  await page.type('input[name="usuario"]', "mavdh");
  await page.type('input[name="senha"]', "@d1win");
  await page.keyboard.press("Enter");
})();
