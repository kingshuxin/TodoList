import React from 'react'
import store from '../store'
import * as Actions from '../store/actionCreate'

class TodoItem extends React.Component {
    render() {
        const { list} = this.props;
        return (
            <>
                <div>
                    <span className='willDo'>代办事项</span>
                    <ol>
                        {
                            list.map((ele, index) => {
                                if (!ele.done) {
                                    return (
                                    <li key={index}>{ele.val}
                                        <button onClick={() => { this.handleChange(index) }}>完成</button>
                                        <button onClick={() => { this.handleDelete(index) }}>删除</button>
                                    </li>)}
                            })
                        }
                    </ol>
                </div>
                <div>
                    <span className='done'>已完成</span>
                    <ol>
                        {
                            list.map((ele, index) => {
                                if (ele.done) {
                                    return (
                                        <li key={index}>{ele.val}
                                            <button onClick={() => { this.handleChange(index) }}>重做</button>
                                            <button onClick={() => { this.handleDelete(index) }}>删除</button>
                                        </li>)
                                }
                            }
                            )
                        }
                    </ol>
                </div>
            </>
        )
    }
    handleChange = (index) => {
        const action = Actions.getChangeList(index)
        store.dispatch(action)
    }
    handleDelete = (index) => {
        const action = Actions.getDeleteList(index)
        store.dispatch(action)
    }
}
export default TodoItem;