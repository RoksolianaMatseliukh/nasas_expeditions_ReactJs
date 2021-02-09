import { SET_ERROR, SET_VALUES_TO_SEARCH } from "../action-types";

export const setError = payload => ({ type: SET_ERROR, payload });

export const setValuesToSearch = payload => ({ type: SET_VALUES_TO_SEARCH, payload });

