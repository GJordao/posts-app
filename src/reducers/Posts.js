import { ADD_POST, REMOVE_POST } from "./../actions/posts";
import { RECEIVE_POSTS } from "./../actions/api";

const defaultState = {
    list: []
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case ADD_POST: {
            const newList = state.list.slice();
            newList.push(action.payload);
            return Object.assign({}, { list: newList });
        }
        case REMOVE_POST: {
            const newList = state.list.slice();
            delete newList[action.payload];
            return Object.assign({}, { list: newList });
        }
        case RECEIVE_POSTS: {
            return Object.assign({}, { list: action.payload });
        }
        default: {
            return state;
        }
    }
}
