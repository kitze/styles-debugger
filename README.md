# Styles Debugger
### Visual helper for debugging style in CSS-in-JS apps
  
v0.0.3 🎉 - by [@thekitze](http://kitze.io)

```npm install styles-debugger --save```

-

![](https://i.imgur.com/ceORWWQ.png)
### Usage example: styled-components

1. Initialize the debugger (i.e in a separate file ```~/config/styles-debug.js```)

```js
import {StyledComponentsDebugger} from 'styles-debugger';
const debug = StyledComponentsDebugger();
export default debug;
```

2. Import it in a file with styled components (i.e ```~/components/Header/styles.js```)

```js
import styled from 'styled-components';
import debug from 'config/styles-debug';

const Header = styled.div`
	width: 100%;
	background-color: red;
	height: 50px;
	${debug('Header')}
`;

```

### Usage example: aphrodite, glamor, jss, etc.

1. Initialize the debugger (i.e in a separate file ```~/config/styles-debug.js```)

```js
import {JavascriptStylesDebugger} from 'styles-debugger';
const debug = JavascriptStylesDebugger();
export default debug;
```

2. Import it in a file with styles (i.e ```~/components/Header/styles.js```)

```js
import {StyleSheet} from 'aphrodite';
import debug from 'config/styles-debug';

const styles = StyleSheet.create({
	Header: {
		width: '100%',
		backgroundColor: red,
		height: 50,
		...debug('Header')
	}
});
```


### Configuring the debugger
Each debugger instance can accept an object with params for configuration. For example:

```js
import {JavascriptStylesDebugger} from 'styles-debugger';

const debug = JavascriptStylesDebugger({
	pseudoElement: 'before',
	color: 'red',
	borderSize: 3,
	position: 3
});

export default debug;
```

### Configuration options
- ```debugMode```: if this is set to ```false``` debug mode will be turned off for all the components (default is ```true```)
- ```pseudoElement```: which pseudo element to be used: ```after``` or ```before```
- ```color```: which should be a default color for the border of the element (by default it's a random color)
- ```debugWith```: what should be used for debugging the elements: ```border``` or ```background``` (default is ```border```)
- ```borderSize```: if using border for debugging, specify the size of the border (default is 1)
- ```showText```: enable or disable showing text with pseudo elements for each component (default is true)
- ```position```: pick the corner position for the text: options are ```1 | 2 | 3 | 4``` (default is 1) 
 
 -
```styles```: an object that can be passed to completely override the styles for ```element``` (the element that is debugged), and ```text``` (the pseudo element with the text).

**With styled-components**:

```js
import {StyledComponentsDebugger} from 'styles-debugger';

const debug = StyledComponentsDebugger({
	styles = {
		element: `
			background-color: black;
			color: white;
		`,
		text: `
			background-color: red;
			color: yellow
		`
	}
});

export default debug;
```

**With others:**

```js
import {JavascriptStylesDebugger} from 'styles-debugger';

const debug = JavascriptStylesDebugger({
	styles = {
		element: {
			backgroundColor: 'black',
			color: 'white'
		},
		text: {
			backgroundColor: 'red',
			color: 'yellow'
		}
	}
});

export default debug;
```

### Available params for ```debug```
```debug(text: String, params: Object)```

Each ```debug``` call can override the default params object for the debugger with a custom object. So for example if for some element you would like to use specific options for debugging you can just pass them as the ```params``` parameter. 
