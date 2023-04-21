## openapi-endpoint-trimmer

⚡ CLI Tool to Trim OpenAPI Paths / Endpoints ⚡

Takes in a path to an OpenAPI spec, either as a file path or a URL, and outputs a new OpenAPI spec with only the paths you specify. The main use case for this is to trim an external spec to just the paths you need before you feed it through a code generator like [openapi-zod-client](https://github.com/astahmer/openapi-zod-client).

### Install

```bash
npm i -D openapi-endpoint-trimmer
```

### Usage

This package is meant to be used as part of a `package.json` script. 

A demo script is included in `package.json` that pulls the GitHub REST API's OpenAPI Spec, trims it to just a few endpoints, and runs it through [openapi-zod-client](https://github.com/astahmer/openapi-zod-client) to generate types. To run:

```bash
git clone https://github.com/aacitelli/openapi-endpoint-trimmer
cd openapi-endpoint-trimmer
npm i
npm run demo
```

**We do not have built-in output validation.** We recommend you validate with [@apidevtools/swagger-cli](https://github.com/APIDevTools/swagger-cli). This library isn't doing anything complicated, so *shouldn't* mess anything up, but is poorly tested and runtime validation is always a good idea.

### CLI Flags

```bash
Usage: openapi-endpoint-trimmer [options]

OpenAPI Endpoint Trimmer.

Options:
  -i, --input <input>    Input File (Local or Absolute Path). (Required: Either this or --url).
  -u, --url <URL>        Input URL
  -o, --output <output>  Output File
  -p, --prefixes <path>     A comma-separated, zero-spaces list of path prefixes to keep. Anything starting with a prefix contained here will be kept. (Ex. /api/v1/users,/repositories)
  
  --help, -h                Display all flags, commands, and descriptions.
  --version, -v             Display the current version.
```

### Implementation Details

This library is pretty straightforward behind the scenes.

1. Loads the data in; local files use `fs.readFileSync`, URLs use [undici](https://www.npmjs.com/package/undici).
2. Parses the data into JSON using [js-yaml](https://www.npmjs.com/package/js-yaml).
3. Filters through the `paths` attribute, keeping only the ones you have
4. Outputs the JSON back to YAML using [js-yaml](https://www.npmjs.com/package/js-yaml).

### Support

If you'd like to support me, you can support me with the "Sponsor" options on the right. Thank you for your support!

### Contributing

I highly encourage contributions! Create issues and/or PRs for any bugs or features you'd like to see.

### License

This project is licensed under the MIT license. This basically means you can use it for any purpose, commercially or not, but I have zero liability.