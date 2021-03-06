import React from "react";
import TodoForm from "./todo_form";

import TodoListItem from "./todo_list_item";

// export default () => <h3>Todo List goes here!</h3>;

export default class TodoList extends React.Component {
    render(){
        const todosArr = this.props.todos;
        const removeTodo = this.props.removeTodo;
        const receiveTodo = this.props.receiveTodo;
        const content = todosArr.map((todo) => {
           return <TodoListItem todo={todo} 
                                key={todo.id}
                                removeTodo={removeTodo}
                                receiveTodo={receiveTodo}
                    />
        })

        return (
          <div>
            <TodoForm receiveTodo={this.props.receiveTodo} />
            <ul>{content}</ul>
          </div>
        );

        
    }
}

