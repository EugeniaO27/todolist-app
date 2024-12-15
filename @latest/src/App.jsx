import { useState } from "react";
import ToDoInput from "./components/todoinput/TodoInput";
import TaskItem from "./components/taskitem/TaskItem";
import Stats from "./components/stats/Stats";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }
  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }
  return (
    <>
      <div className="container">
        <h1>To-Do LIST</h1>

        <ToDoInput addTask={addTask} />

        <div className="toDoList">
          <span>To Do</span>
          <ul className="list-items">
            {toDoList.map((task, key) => (
              <TaskItem
                task={task}
                key={key}
                deleteTask={deleteTask}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
          {toDoList.length === 0 ? <p className="notify">NICE ONE!</p> : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}
export default App;
