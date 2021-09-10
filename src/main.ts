#!/usr/bin/env node

import * as repl from "pretty-repl";
import { asyncEval } from "./lib/eval";
import { Firepl } from "./lib/firepl";
import { getArgs } from "./lib/args";

const args = getArgs();
const firepl = new Firepl(args.credentials);

const customRepl = repl.start({ prompt: "🔥> ", eval: asyncEval });
customRepl.context.firepl = firepl;
