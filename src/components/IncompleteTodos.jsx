import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">Incomplete</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>DONE</button>
              <button onClick={() => onClickDelete(index)}>DELETE</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
