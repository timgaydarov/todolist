import React, {useState} from 'react';

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (tasksId: number) => void
}

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export function Todolist(props: PropsType) {
  const tasksFilter = (filterValue: string) => {
    setFilter(filterValue)
  }

  const [filter, setFilter] = useState('All')

  let colander = props.tasks
  if (filter === 'Active') {
    colander = props.tasks.filter(el => el.isDone)
  }
  if (filter === 'Completed') {
    colander = props.tasks.filter(el => !el.isDone)
  }
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {colander.map((el, key) => {
          return (
            <li key={el.id}>
              <button
                onClick={() => props.removeTask(el.id)}>Х
              </button>
              <input type="checkbox" defaultChecked={el.isDone}/> <span>{el.title}</span>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => tasksFilter('All')}>All</button>
        <button onClick={() => tasksFilter('Active')}>Active</button>
        <button onClick={() => tasksFilter('Completed')}>Completed</button>
      </div>
    </div>
  );
}