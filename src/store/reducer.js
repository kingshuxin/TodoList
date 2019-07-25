import * as types from './actionType'

const initState = {
    list: []
}

export default (state = initState, action) => {
    const newState = JSON.parse(JSON.stringify(state));

    // eslint-disable-next-line default-case
    switch (action.type) {
        case types.ADD_TO_LIST:
            if(action.val){
                newState.list.push({ val: action.val, done: action.done });
            }else{
                alert('你今天的目标是啥？？？')
            }
            
            return newState;
        case types.CHANGE_LIST:
            newState.list[action.index].done = !newState.list[action.index].done
            return newState;
        case types.DELETE_LIST:
            newState.list.splice([action.index],1)
            return newState;
    }
    return state;
}