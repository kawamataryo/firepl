import yargs from "yargs";

export const getArgs = () =>
  yargs(process.argv)
    .options({
      credentials: {
        alias: "c",
        description: "Private key file for your service account",
        type: "string",
        demand: "credentials must be specified",
      },
    })
    .demand(1, "Please specify a credentials")
    .parseSync();
