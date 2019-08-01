export const ageUpAsync = val => {
  return { type: 'AGE_UP', value: JSON.stringify(val) };
};
export const ageDown = val => {
  return { type: 'AGE_DOWN', value: val };
};

export const ageUp = val => {
  return dispatch => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        dispatch(ageUpAsync(json));
      });
  };
};
