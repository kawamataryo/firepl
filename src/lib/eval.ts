import { processTopLevelAwait } from "node-repl-await";
import * as vm from "vm";
import * as repl from "repl";
import { Context } from "vm";

function isRecoverableError(error: Error) {
  if (error.name === "SyntaxError") {
    return /^(Unexpected end of input|Unexpected token)/.test(error.message);
  }
  return false;
}

export const asyncEval = async (
  code: string,
  context: Context,
  filename: string,
  callback: (...args: any[]) => any
) => {
  code = processTopLevelAwait(code) || code;

  try {
    const result = await vm.runInNewContext(code, context);
    callback(null, result);
  } catch (e) {
    if (e instanceof Error && isRecoverableError(e)) {
      callback(new repl.Recoverable(e));
    } else {
      console.log(e);
    }
  }
};
