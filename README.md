# Styles Debugger
###A helper for visually debugging css-in-js styles. 

- Works both with template literals and objects. 
- It also works with inline styles but it won't show any text.

Made by [Kitze](https://twitter.com/thekitze)

## Install

`yarn add styles-debugger`

## Demos

- [CodeSandbox example with styled-components](https://codesandbox.io/s/j0yq16l7v)
- [CodeSandbox example with emotion](https://codesandbox.io/s/0or563w2yv)
- [CodeSandbox example with a custom debugger](https://codesandbox.io/s/ry65nyvr6p)

![](https://i.imgur.com/ceORWWQ.png)

## Basic usage

### With template literals

```js
import { debug } from 'styles-debugger';
import styled from 'styled-components';

const Header = styled.div`
  ${debug()};
`;
```

### With objects

```js
import { debug } from 'styles-debugger';
import emotion from 'react-emotion';

const Header = emotion('div')({
  ...debug()
});
```

### Show text along the border

```js
const Wrapper = styled.div`
  ${debug('Wrapper')};
`;
```

### Show text + customize options

```js
const Footer = styled.div`
  ${debug('Footer', { color: 'blue', debugWith: 'background' })};
`;
```

## Initialize custom instance

Instead of using the default `debug` function you can create your own debugger.
Initialize it in some file and customize it the way you want.

```js
import { CreateStylesDebugger } from 'styles-debugger';

const debug = CreateStylesDebugger({
  color: 'blue',
  borderSize: 3,
  position: 2,
  styles: {
    text: {
      color: 'red'
    }
  },
  debugWith: 'background'
});

export default debug;
```

### Configuring the debugger

```js
import { JavascriptStylesDebugger } from 'styles-debugger';

const debug = JavascriptStylesDebugger({
  pseudoElement: 'before',
  color: 'red',
  borderSize: 3,
  position: 3
});

export default debug;
```

### Configuration options

- `enabled`: if this is set to `false` debug mode will be turned off for all the components (default is `true`)
- `position`: pick the corner position for the text: options are `1 | 2 | 3 | 4` (default is `1`)
- `color`: which should be a default color for the border of the element (by default it's a random color)
- `debugWith`: what should be used for debugging the elements: `border` or `background` (default is `border`)
- `borderSize`: if using border for debugging, specify the size of the border (default is 1)
- `showText`: enable or disable showing text with pseudo elements for each component (default is true)
- `pseudoElement`: which pseudo element to be used: `after` or `before`
- `styles`: an object that can be passed to completely override the styles for `element` (the element that is debugged), and `text` (the pseudo element with the text).

### Available params for `debug`

`debug(text: String, params: Object)`

Each `debug` function call can override the default params object for the debugger with a custom object. So for example if for some element you would like to use specific options for debugging you can just pass them as the `params` parameter.
