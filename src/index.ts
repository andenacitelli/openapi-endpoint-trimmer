#! /usr/bin/env node
import { program } from "commander";
import figlet from "figlet";

console.log(figlet.textSync("OpenAPI Endpoint Trimmer"));

program
  .name("openapi-endpoint-trimmer")
  .version("1.0.0")
  .description("OpenAPI Endpoint Trimmer")
  .option("-i, --input <input>", "Input File")
  .option("-u, --url <URL>", "Input URL", ",")
  .option("-o, --output <output>", "Output File")
  .parse();

console.log("Hello!");
