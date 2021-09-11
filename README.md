# Firepl 🔥
[![CI](https://github.com/kawamataryo/firepl/actions/workflows/release.yml/badge.svg)](https://github.com/kawamataryo/firepl/actions/workflows/ci.yml)
<a href="https://npmcharts.com/compare/firepl?minimal=true"><img src="https://img.shields.io/npm/dt/firepl.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/firepl"><img src="https://img.shields.io/npm/v/firepl.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/firepl"><img src="https://img.shields.io/npm/l/firepl.svg" alt="License"></a>
<a href="https://github.com/kawamataryo/firepl" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/kawamataryo/firepl?style=social"></a>

An tiny wrapper of the Node REPL to make firestore easier to use.


## Usage

```bash
# If you use npx command
npx firepl -c YOUR_SERVICE_ACCOUNT_FILE_PATH

# If you use global install
npm i -g firepl
firepl -c YOUR_SERVICE_ACCOUNT_FILE_PATH
```

## Custom context
Firepl allows you to use a custom context called `firepl` inside REPL. `firepl` makes firestore more convenient.

|name|description|
|---|---|
|`firepl.db` | This is the entry point of the Firestore operation for the firebase project specified in credentials. Result of `admin.firestore()`. |
|`firepl.getData(arg)` | Methods to get data from collectionsReference or documentReference. |

