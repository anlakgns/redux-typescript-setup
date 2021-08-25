import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

export const searchRepositories = (term: string) => {
  
  // taking dispatch as an argument to use in block
  return async (dispatch: Dispatch<Action>) => {
    
    // sending searching state temporarly
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    // requesting data
    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });

      // error handling
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
