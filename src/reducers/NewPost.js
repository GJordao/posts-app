import { HIDE_NEW_POST, SHOW_NEW_POST } from "./../actions/newPost";

const defaultState = {
    hidden: true
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case SHOW_NEW_POST: {
            return Object.assign({}, { hidden: false });
        }
        case HIDE_NEW_POST: {
            return Object.assign({}, defaultState);
        }
        default: {
            return state;
        }
    }
}
