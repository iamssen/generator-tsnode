# Yeoman Generator for Node Application

```sh
npm install -g generator-tsnode
mkdir your-project
cd your-project
yo tsnode
```

# Update log

## 2016.2.2
- Using typescript 1.8 AMD, System.js `outFile`
- Changed typescript compile `gulp-tsc` to `typescript@1.8.*`
- Now `npm run build` will make 3 type module files (AMD, System.js, Common.js)

## 2016.1.25
- Change module dialog

## 2015.12.31
- Remove `use strict`
- Change typescript target from `es6` to `es5`

## 2015.12.21
- Exclude ignore `/dist`
- Separated `modules.json`
- Build change from `tsconfig.json` to using `gulpfile.js`

## 2015.12.20
- Source code improved

## 2015.12.18
- First release