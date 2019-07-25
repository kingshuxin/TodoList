import React from 'react'
import store from '../store'
import * as Actions from '../store/actionCreate'
import TodoItem from './TodoItem'
class TodoList extends React.Component {
    task = React.createRef()
    state = store.getState();

    componentDidMount (){
        store.subscribe(this.handleStoreChange)
    }
    render() {
        
        // let done = 0;
//  this.state.list.forEach(ele => {
//         if(ele.done){
//             willDo++
//         }else{
//             done++
//         }
//     });
        return (
            <>
                <div>
                    <input type="text"  ref={this.task}/>
                    <button onClick={this.handleAdd}>添加</button>
                </div>
                
                <TodoItem list = {this.state.list}></TodoItem>
                
            </>
        )
    }
    // handleChange = (e) =>{
    //     const action = Actions.getChangeAction(e.target.value)//{val:e.target.value, done:false}
    //     store.dispatch(action)
    // }
    handleAdd = () =>{
        const action =Actions.getAddList({val:this.task.current.value, done: false})
        this.task.current.value =''
        store.dispatch(action)
    }
    handleChange = (index) =>{
        const action = Actions.getChangeList(index)
        store.dispatch(action)
    }
    handleStoreChange = ()=> {
        this.setState(store.getState())  
    }
}

export default TodoList;