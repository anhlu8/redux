export const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log('Caught in action', result);
      return result;
    };
  };
};
