import { SET_ERROR } from "../action-types";

const initialState = {
    isError: false
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_ERROR:

            return { ...state, isError: action.payload };

        default:
            return state;
    }
};
