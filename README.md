# react-kickstart
**just another react + webpack boilerplate**

## Features
* webpack + vanilla hot-module-replacement
* Stateless functional components
* redux
* [css-modules](https://github.com/css-modules/css-modules/) + [PostCSS](https://github.com/postcss/postcss)
* basic routing setup with react-router (you most likely need routing in your app)
* [babeljs](https://babeljs.io/)
* unit tests ([ava](https://github.com/sindresorhus/ava) + [sinon](http://sinonjs.org/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom)
* code coverage with [nyc](https://github.com/bcoe/nyc)
* development and production build

## Modifications in this fork

- Use [redux-act](https://github.com/pauldijou/redux-act.git) for actions
- Add bluebird `Promise`
- Add babel `async`/`await` support
- Add `fetch`

## Usage

**Clone this repository**
```
git clone https://github.com/akfish/react-kickstart.git
```

**Install**
```
npm install
```

**Start the application in dev mode with hot-module-replacement**
```
npm start
```

**Run tests**
```
npm test
```

**Build for production**
```
npm run build
```

**Run production version**
```
npm run build:start
```

**Lint with standard**
```
npm run lint
```

**Generate code coverage report**
```
npm run test:cover
```

## Contributing

PR and issues reporting are always welcome :)

## License

See LICENSE file

## Changelog

See CHANGELOG.md file
