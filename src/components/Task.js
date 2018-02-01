import React from 'react';

export default (props) => {
  return (
    <div className="task-list">
      <li>
        <button
          onClick={() => props.shiftTask(props.columnIndex, props.taskIndex, props.columnIndex - 1)}
          className={props.columnIndex === 0 ? 'hide' : ''}
        >
          {'<'}
        </button>
        {props.text}
        <button
          onClick={() => props.shiftTask(props.columnIndex, props.taskIndex, props.columnIndex + 1)}
          className={props.columnIndex === 3 ? 'hide' : ''}
        >
          {'>'}
        </button>
      </li>
    </div>
  );
};
