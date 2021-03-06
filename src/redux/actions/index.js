import { ADD_ARTICLE, DATA_LOADED } from './types/action-types';

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}
