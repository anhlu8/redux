import { ADD_ARTICLE } from '../actions/types/action-types';

const forbiddenWords = ['spam', 'monkey'];

export function forbiddenWordsMiddleware({ getState, dispatch }) {
  return function(next) {
    return function(action) {
      //do stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        console.log('foundWord', foundWord);
        if (foundWord.length) {
          return dispatch({ type: 'FOUND_BAD_WORD' });
        }
      }
      return next(action);
    };
  };
}
