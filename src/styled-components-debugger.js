import {getRandomColor, getPaletteColor} from './utils';

const debugTemplateLiterals = (defaultParams = {}) => {

  if (defaultParams.debugMode === false) {
    return () => {
    }
  }

  return (text, params = {}) => {

    const mergedParams = {...defaultParams, ...params};

    const {
            styles                    = {},
            pseudoElement             = 'after',
            color                     = params.color ? params.color : getRandomColor(),
            debugWith                 = 'border',
            borderSize                = 1,
            showText                  = true,
            position                  = 1,
          }                           = mergedParams;

    if (params.pretty) {
      color = getPaletteColor(params.pretty)
    }
    const displayText = showText === true && !!text;
    return `
      ${displayText && `position: relative`};
      ${debugWith === 'border' && `border: ${borderSize}px solid ${color}`};
      ${debugWith === 'background' && `background-color: ${color}`};
      ${styles.element};
      ${displayText && `&:${pseudoElement}{
          content: '${text}';
          background-color: #eaeaea;
          color: gray;
          font-size: 12px;
          padding: 2px 10px;
          text-align: center;
          position: absolute;
          ${position === 1 && `
            top: 0;
            left: 0;
          `};
          ${position === 2 && `
            top: 0;
            right: 0;
          `};
          ${position === 3 && `
            bottom: 0;
            right: 0;
          `};
          ${position === 4 && `
            bottom: 0;
            left: 0;
          `};
          ${styles.name};
      }`
      }`
  }
}

export default debugTemplateLiterals;
