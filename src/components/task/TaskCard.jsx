import React, { useState } from 'react';
import TaskCardDeleteButton from './button/TaskCardDeleteButton'
import TaskAddInput from './input/TaskAddInput'
import TaskCardTitle from './TaskCardTitle'
import Tasks from './Tasks'

const TaskCard = ({taskCardsList, setTaskCardsList, taskCard }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className='taskCard'>
      <div className='taskCardTitleAndTaskCardDeleteButtonArea'>
      <TaskCardTitle />
      <TaskCardDeleteButton 
      taskCardsList={taskCardsList}
      setTaskCardsList={setTaskCardsList}
      taskCard={taskCard}
      />
      </div>
      <TaskAddInput 
      inputText={inputText} 
      setInputText={setInputText}
      setTaskList={setTaskList}
      taskList={taskList}
      />
      <Tasks 
      inputText={inputText} 
      taskList={taskList}
      setTaskList={setTaskList} />
    </div>
  )
}

export default TaskCard
