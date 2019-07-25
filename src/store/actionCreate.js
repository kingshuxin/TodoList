import * as Types from './actionType'

export const getChangeAction = (value) =>{
    return {
        type: Types.CHANGE_INPUT_VALUE,
        value
    }
}

export const getAddList = (value) =>{
    return {
        type: Types.ADD_TO_LIST,
        val: value.val,
        done: value.done
    }
}

export const getChangeList = (index) =>{
    return {
        type: Types.CHANGE_LIST,
        index
    }
}

export const getDeleteList = (index) =>{
    return {
        type: Types.DELETE_LIST,
        index
    }
}
