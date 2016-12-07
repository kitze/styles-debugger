var getRandomColor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var debugTemplateLiterals = function debugTemplateLiterals() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (params.debugMode === false) {
    return function () {};
  }

  var _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles,
      _params$pseudoElement = params.pseudoElement,
      pseudoElement = _params$pseudoElement === undefined ? 'after' : _params$pseudoElement,
      _params$color = params.color,
      defaultColor = _params$color === undefined ? 'random' : _params$color,
      _params$debugWith = params.debugWith,
      debugWith = _params$debugWith === undefined ? 'border' : _params$debugWith,
      _params$borderSize = params.borderSize,
      borderSize = _params$borderSize === undefined ? 1 : _params$borderSize,
      _params$showText = params.showText,
      showText = _params$showText === undefined ? true : _params$showText,
      _params$position = params.position,
      defaultPosition = _params$position === undefined ? 1 : _params$position;


  return function (text) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$color = _ref.color,
        color = _ref$color === undefined ? defaultColor === 'random' ? getRandomColor() : defaultColor : _ref$color,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? defaultPosition : _ref$position;

    var displayText = showText === true && !!text;
    return '\n      ' + (displayText && 'position: relative') + ';\n      ' + (debugWith === 'border' && 'border: ' + borderSize + 'px solid ' + color) + ';\n      ' + (debugWith === 'background' && 'background-color: ' + color) + ';\n      ' + styles.element + ';\n      ' + (displayText && '&:' + pseudoElement + '{\n          content: \'' + text + '\';\n          background-color: #eaeaea;\n          color: gray;\n          font-size: 12px;\n          padding: 2px 10px;\n          text-align: center;\n          position: absolute;\n          ' + (position === 1 && '\n            top: 0;\n            left: 0;\n          ') + ';\n          ' + (position === 2 && '\n            top: 0;\n            right: 0;\n          ') + ';\n          ' + (position === 3 && '\n            bottom: 0;\n            right: 0;\n          ') + ';\n          ' + (position === 4 && '\n            bottom: 0;\n            left: 0;\n          ') + ';\n          ' + styles.name + ';\n      }');
  };
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var debugObjects = function debugObjects() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (params.debugMode === false) {
    return function () {};
  }

  var _params$styles = params.styles,
      styles = _params$styles === undefined ? {} : _params$styles,
      _params$pseudoElement = params.pseudoElement,
      pseudoElement = _params$pseudoElement === undefined ? 'after' : _params$pseudoElement,
      _params$color = params.color,
      defaultColor = _params$color === undefined ? 'random' : _params$color,
      _params$debugWith = params.debugWith,
      debugWith = _params$debugWith === undefined ? 'border' : _params$debugWith,
      _params$borderSize = params.borderSize,
      borderSize = _params$borderSize === undefined ? 1 : _params$borderSize,
      _params$showText = params.showText,
      showText = _params$showText === undefined ? true : _params$showText,
      _params$position = params.position,
      defaultPosition = _params$position === undefined ? 1 : _params$position;


  return function (text) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$color = _ref.color,
        color = _ref$color === undefined ? defaultColor === 'random' ? getRandomColor() : defaultColor : _ref$color,
        _ref$position = _ref.position,
        position = _ref$position === undefined ? defaultPosition : _ref$position;

    var displayText = showText === true && !!text;
    return _extends({}, displayText && { position: 'relative' }, debugWith === 'border' && { border: borderSize + 'px solid ' + color }, debugWith === 'background' && { backgroundColor: color }, styles.element, displayText && defineProperty({}, ':' + pseudoElement, _extends({
      content: '"' + text + '"',
      color: 'gray',
      backgroundColor: '#eaeaea',
      fontSize: 12,
      padding: '2px 10px',
      textAlign: 'center',
      position: 'absolute'
    }, position === 1 && {
      top: 0,
      left: 0
    }, position === 2 && {
      top: 0,
      right: 0
    }, position === 3 && {
      bottom: 0,
      right: 0
    }, position === 4 && {
      bottom: 0,
      left: 0
    }, styles.name)));
  };
};

export { debugTemplateLiterals as StyledComponentsDebugger, debugObjects as JavascriptStylesDebugger };
