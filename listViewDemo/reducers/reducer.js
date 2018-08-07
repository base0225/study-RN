import * as ACTION from './../actions/ACTIONS';

let initial = {
    listData:['1','2','3']
};

export default function items(state = initial, action) {
    switch (action.type) {
        case ACTION.LIST_DATA_DONE:
        {
            return {
                ...state,
                listData: action.data,
            };
        }
            break;
        case ACTION.LIST_DATA_LOADING:
        {
            return {
                ...state,
                // listData: action.data,
            }
        }
            break;
        default:
            return state;
    }
}
