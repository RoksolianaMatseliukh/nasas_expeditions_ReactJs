import { SET_VALUES_TO_SEARCH } from "../action-types";

const initialState = {
    rover: '',
    camera: '',
    sol: ''
};

export const setValuesToSearchReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_VALUES_TO_SEARCH:

            return { ...state, [action.payload.target.name]: action.payload.target.value };

        default:
            return state;
    }
};
