import { getRandomColor } from './utils';
const iff = (condition, obj) => (condition ? obj : {});

const CreateStylesDebugger = (defaultParams = {}) => {
  if (defaultParams.enabled === false) {
    return () => {};
  }

  return (text, params = {}) => {
    const mergedParams = { ...defaultParams, ...params };

    const {
      styles = {},
      pseudoElement = 'after',
      color = params.color || getRandomColor(),
      debugWith = 'border',
      borderSize = 1,
      showText = true,
      position = 1
    } = mergedParams;

    console.log('styles', styles);
    const displayText = showText === true && !!text;

    return {
      ...iff(displayText, { position: 'relative' }),
      ...iff(debugWith === 'border', { border: `${borderSize}px solid ${color}` }),
      ...iff(debugWith === 'background', { backgroundColor: color }),
      ...styles.element,
      ...iff(displayText, {
        [`:${pseudoElement}`]: {
          content: `"${text}"`,
          color: 'gray',
          backgroundColor: '#eaeaea',
          fontSize: '12px',
          padding: '2px 10px',
          textAlign: 'center',
          position: 'absolute',
          ...iff(position === 1, {
            top: 0,
            left: 0
          }),
          ...iff(position === 2, {
            top: 0,
            right: 0
          }),
          ...iff(position === 3, {
            bottom: 0,
            left: 0
          }),
          ...iff(position === 4, {
            bottom: 0,
            right: 0
          }),
          ...styles.name
        }
      })
    };
  };
};

export default CreateStylesDebugger;
