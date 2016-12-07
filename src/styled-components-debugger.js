import {getRandomColor} from './utils';

const debugTemplateLiterals = (params = {}) => {

  if(params.debugMode === false){
    return;
  }

  const {
          styles                    = {},
          pseudoElement             = 'after',
          color: defaultColor       = 'random',
          debugWith                 = 'border',
          borderSize                = 1,
          showText                  = true,
          position: defaultPosition = 1,
        }                           = params;

  return (text, {color = defaultColor === 'random' ? getRandomColor() : defaultColor, position = defaultPosition} = {}) => {
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