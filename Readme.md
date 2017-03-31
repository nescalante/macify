# macify

[![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/macify.svg)](https://greenkeeper.io/)

> Converts a Windows shortcut to a Mac shortcut

## Install

```
npm install macify
```

## Usage

```js
const macify = require('macify');
const windowsShortcut = 'Ctrl+K';

// on a Mac
macify(windowsShortcut) // ⌘+K
```

## License

MIT
