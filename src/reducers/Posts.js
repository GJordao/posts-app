import { ADD_POST, REMOVE_POST } from "./../actions/posts";

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
        default: {
            return state;
        }
    }
}
