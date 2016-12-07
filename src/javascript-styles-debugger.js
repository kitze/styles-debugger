import {getRandomColor} from './utils';

const debugObjects = (defaultParams = {}) => {

  if(defaultParams.debugMode === false){
    return () => {}
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

    const displayText = showText === true && !!text;
    return {
      ...displayText && {position: 'relative'},
      ...debugWith === 'border' && {border: `${borderSize}px solid ${color}`},
      ...debugWith === 'background' && {backgroundColor: color},
      ...styles.element,
      ...displayText && {
        [`:${pseudoElement}`]: {
          content: `"${text}"`,
          color: 'gray',
          backgroundColor: '#eaeaea',
          fontSize: 12,
          padding: '2px 10px',
          textAlign: 'center',
          position: 'absolute',
          ...position === 1 && {
            top: 0,
            left: 0
          },
          ...position === 2 && {
            top: 0,
            right: 0
          },
          ...position === 3 && {
            bottom: 0,
            right: 0
          },
          ...position === 4 && {
            bottom: 0,
            left: 0
          },
          ...styles.name
        }
      }
    };
  }
}

export default debugObjects;