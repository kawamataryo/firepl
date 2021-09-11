#!/usr/bin/env node

import * as repl from "pretty-repl";
import { asyncEval } from "./lib/eval";
import { Firepl } from "./lib/firepl";
import { getArgs } from "./lib/args";

const args = getArgs();
const firepl = new Firepl(args.credentials);

console.log("Welcome to Firepl.\nexit using Ctrl+D or type .exit\n");
const customRepl = repl.start({ prompt: "🔥> ", eval: asyncEval });
customRepl.context.firepl = firepl;
