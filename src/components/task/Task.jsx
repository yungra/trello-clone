import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, taskList, setTaskList }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id) );
  };
  return (
    <div className='taskBox'>
      <p className='taskText'>{task.text}</p>
      <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
      <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Task
