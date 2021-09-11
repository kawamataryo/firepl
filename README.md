# Firepl 🔥
[![CI](https://github.com/kawamataryo/firepl/actions/workflows/release.yml/badge.svg)](https://github.com/kawamataryo/firepl/actions/workflows/ci.yml)
<a href="https://npmcharts.com/compare/firepl?minimal=true"><img src="https://img.shields.io/npm/dt/firepl.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/firepl"><img src="https://img.shields.io/npm/v/firepl.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/firepl"><img src="https://img.shields.io/npm/l/firepl.svg" alt="License"></a>
<a href="https://github.com/kawamataryo/firepl" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/kawamataryo/firepl?style=social"></a>

![ezgif com-gif-maker (20)](https://user-images.githubusercontent.com/11070996/132949363-d2f477a1-6601-46f5-8d0b-203396c22172.gif)
 
## features ✨

- custom contexts can be used to make Firestore more easily.
- top level async/await support. powerd by [node-repl-wait](https://www.npmjs.com/package/node-repl-await).
- syntax highlighting support. powered by [pretty-repl](https://www.npmjs.com/package/pretty-repl).

## usage 🚀
In order to use firepl, you need to get a key file for your firebase service account.

**To generate a private key file for your service account:**
1. In the Firebase console, open [Settings > Service Accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).
2. Click Generate New Private Key, then confirm by clicking Generate Key.
3. Securely store the JSON file containing the key.

After downloading the service account key file, execute the following command.

```bash
# If you use npx command
npx firepl -c YOUR_SERVICE_ACCOUNT_FILE_PATH

# If you use global install
npm i -g firepl
firepl -c YOUR_SERVICE_ACCOUNT_FILE_PATH
```

## custom context 🎮
Firepl allows you to use a custom context called `firepl` inside REPL. `firepl` makes firestore more convenient.

|name|description|
|---|---|
|`firepl.db` | This is the entry point of the Firestore operation for the firebase project specified in credentials. Result of `admin.firestore()`. |
|`firepl.getData(arg)` | Methods to get data from collectionsReference or documentReference. |
