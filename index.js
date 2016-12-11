#! /usr/bin/env node
var shell = require("shelljs");
var help = require("./bin/help");
var init = require("./bin/init");

var args = process.argv.slice(2);

// shell.exec("echo shell.exec works");

if(args.length > 0){
  switch (args[0]) {
    case 'init':
      init(args.slice(1))
      break;
    default:
      console.log("Unknown Command");
      help();
  }
} else {
  help();
}
