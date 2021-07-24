# Reactを使ったポートフォリオサイト
## ローカルなサーバ立ち上げ
```Shell
npm install
npm start
```

## デプロイ
```Shell
npm run-script build
scp -r buid/* <userName>@<target server>:<target directory>
```
