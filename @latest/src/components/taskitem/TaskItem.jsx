import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ task, deleteTask, togglecheck }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => togglecheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>

      <MdDeleteSweep
        className="delete"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
};

export default TaskItem;
