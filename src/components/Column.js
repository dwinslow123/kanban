import React from 'react';
import Task from './Task';
import NewTask from './NewTask';
import '../css/style.css';

export default (props) => {
  return (
    <div className="column">
      <ul>
        <h3>{props.data.name}</h3>
        <NewTask
          columnIndex={props.columnIndex}
          addTask={props.addTask}
        />
        {props.data.tasks.map((row, taskIndex) => {
          return (
            <Task 
              key={taskIndex}
              text={row.text}
              taskIndex={taskIndex}
              columnIndex={props.columnIndex}
              shiftTask={props.shiftTask}
            />
          );
        })}
      </ul>
    </div>
  );
};
