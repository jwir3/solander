#!/usr/bin/env node
const process = require('process');
const path = require('path');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const Solander = require('../dist/solander');

const optionDefinitions = [
  {
    name: 'color',
    alias: 'c',
    description: 'The color to name, in hexidecimal form, with an optional hash mark (#) preceding it.',
    type: String,
    typeLabel: '<color>',
    defaultOption: true
  },
  {
    name: 'help',
    alias: 'h',
    description: 'Display this usage guide'
  }
];

const sections = [
  {
    header: 'Solander: A color naming utility',
    content: 'Retrieves the name of a hexidecimal color using a conventionally accepted naming mechanism.'
  },
  {
    header: 'Typical Usage',
    content: 'solander <color>'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
];

const options = commandLineArgs(optionDefinitions);
const usage = commandLineUsage(sections);

if (isEmpty(options) || options.hasOwnProperty('help')) {
  console.log(usage);
  return 0;
}

let solander = new Solander([options['color']]);
console.log('Color Name: ' + solander.colorName);

function isEmpty(opts) {
  for (var key in opts) {
    return !opts.hasOwnProperty(key);
  }

  return true;
}
