#! /usr/bin/env node
import * as fs from "node:fs";
import chalk from "chalk";
import { program } from "commander";
import { dump, load } from "js-yaml";
import { request } from "undici";
import { z } from "zod";
console.log(chalk.blue(`${chalk.blue.bold("OpenAPI Endpoint Trimmer")} ${chalk.gray("v" + process.env.npm_package_version)}`));
program
    .name("openapi-endpoint-trimmer")
    .description("OpenAPI Endpoint Trimmer.")
    .option("-i, --input <input>", "Input File (Local or Absolute Path). (Required: Either this or --url).")
    .option("-u, --url <URL>", "Input URL")
    .option("-o, --output <output>", "Output File")
    .option("-v, --version", "Display the current version.")
    .option("-p, --prefixes <path>", "A comma-separated, zero-spaces list of paths to keep. (Ex. /api/v1/users,/api/v1/organizations)")
    .option("--help", "Display all flags, commands, and descriptions.");
program.parse();
if (program.opts().help) {
    program.help();
    process.exit(0);
}
if (program.opts().version) {
    console.log(process.env.npm_package_version);
    process.exit(0);
}
const options = z
    .object({
    input: z.string().optional(),
    url: z.string().url().optional(),
    output: z.string(),
    prefixes: z.string(),
})
    .refine((data) => {
    if ((data.input && data.url) || (!data.input && !data.url)) {
        throw new Error("Please specify either an input file or a URL (exactly one).");
    }
    return true;
})
    .parse(program.opts());
let data;
if (options.input) {
    data = fs.readFileSync(options.input, "utf8");
}
else if (options.url) {
    // eslint-disable-next-line unicorn/no-await-expression-member
    const response = await request(options.url);
    if (response.statusCode !== 200) {
        throw new Error(`Received a non-200 response when downloading from ${options.url}. Received ${response.statusCode}. Please double check your setup.`);
    }
    data = await response.body.text();
}
else {
    throw new Error(`Found neither an input URL or an input file!`);
}
const prefixes = options.prefixes.split(",");
console.log(chalk.gray(`Trimming to just paths ${prefixes.join(", ")}...`));
let parsed = load(data);
const paths = {};
for (const path of Object.keys(parsed.paths)) {
    if (prefixes.some((retain) => path.startsWith(retain))) {
        paths[path] = parsed.paths[path];
    }
}
parsed = {
    ...parsed,
    paths,
};
const filePath = options.output ?? (options.input ?? options.url) + "-trimmed.yaml";
fs.writeFileSync(filePath, dump(parsed));
console.log(`Output To: ${filePath}`);
