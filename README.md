# html-css-tools-pec1

## Installation

`$ npm install --save-dev parcel`

`$ npx parcel src/index.html`

## Package scripts

package.json:

```
{
  "name": "my-project",
  "source": "src/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}
```

## Declaring browser targets

package.json:

```
{
  "name": "my-project",
  "source": "src/index.html",
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}


```

`$ npm run start`

`$ npm run build`

`$ npm install --save-dev rimraf npm-run-all`

```
{
  "name": "parcel-first-step",
  "source": "src/index.html",
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "scripts": {
    "parcel:dev": "parcel",
    "parcel:build": "parcel build",
    "clean": "rimraf dist .parcel-cache",
    "start": "npm-run-all clean parcel:dev",
    "build": "npm-run-all clean parcel:build"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.5",
    "parcel": "^2.3.2",
    "postcss": "^8.4.8",
    "postcss-custom-properties": "^12.1.4",
    "postcss-import": "^14.0.2",
    "postcss-url": "^10.1.3",
    "rimraf": "^3.0.2"
  },
  "dependencies": {
    "autoprefixer": "^10.4.2"
  }
}
```
