'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getRandomColor = function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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

var iff = function iff(condition, obj) {
  return condition ? obj : {};
};

var CreateStylesDebugger = function CreateStylesDebugger() {
  var defaultParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (defaultParams.enabled === false) {
    return function () {};
  }

  return function (text) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedParams = _extends({}, defaultParams, params);

    var _mergedParams$styles = mergedParams.styles,
        styles = _mergedParams$styles === undefined ? {} : _mergedParams$styles,
        _mergedParams$pseudoE = mergedParams.pseudoElement,
        pseudoElement = _mergedParams$pseudoE === undefined ? 'after' : _mergedParams$pseudoE,
        _mergedParams$color = mergedParams.color,
        color = _mergedParams$color === undefined ? params.color || getRandomColor() : _mergedParams$color,
        _mergedParams$debugWi = mergedParams.debugWith,
        debugWith = _mergedParams$debugWi === undefined ? 'border' : _mergedParams$debugWi,
        _mergedParams$borderS = mergedParams.borderSize,
        borderSize = _mergedParams$borderS === undefined ? 1 : _mergedParams$borderS,
        _mergedParams$showTex = mergedParams.showText,
        showText = _mergedParams$showTex === undefined ? true : _mergedParams$showTex,
        _mergedParams$positio = mergedParams.position,
        position = _mergedParams$positio === undefined ? 1 : _mergedParams$positio;


    console.log('styles', styles);
    var displayText = showText === true && !!text;

    return _extends({}, iff(displayText, { position: 'relative' }), iff(debugWith === 'border', { border: borderSize + 'px solid ' + color }), iff(debugWith === 'background', { backgroundColor: color }), styles.element, iff(displayText, defineProperty({}, ':' + pseudoElement, _extends({
      content: '"' + text + '"',
      color: 'gray',
      backgroundColor: '#eaeaea',
      fontSize: '12px',
      padding: '2px 10px',
      textAlign: 'center',
      position: 'absolute'
    }, iff(position === 1, {
      top: 0,
      left: 0
    }), iff(position === 2, {
      top: 0,
      right: 0
    }), iff(position === 3, {
      bottom: 0,
      left: 0
    }), iff(position === 4, {
      bottom: 0,
      right: 0
    }), styles.name))));
  };
};

var defaultDebugger = CreateStylesDebugger();

exports.debug = defaultDebugger;
exports.CreateStylesDebugger = CreateStylesDebugger;
