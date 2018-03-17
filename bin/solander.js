#!/usr/bin/env node
const process = require('process');
const path = require('path');
const Solander = require('../dist/solander');

function printUsage(errorMsg) {
  if (errorMsg) {
    console.error('Error: ' + errorMsg + "\n");
  }

  console.error("usage: " + path.basename(process.argv[1]) + " <color>\n");
  console.error("Retrieve the name of a hexidecimal color using a conventional naming mechanism.\n");
  console.error("\tcolor: A color in hexidecimal form (as a string).")
}

if (process.argv.length < 3) {
  printUsage("You must specify a hexidecimal color, optionally preceded by a hash");
}

let args = [ process.argv[2] ];
let solander = new Solander(args);
console.log("Color Name: " + solander.colorName);
