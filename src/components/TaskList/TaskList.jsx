import { Component } from "react";
import TaskItem from "../Task/Task.jsx";
import css from "./TaskList.module.css";

class TaskList extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul className={css.tasklist}>
        {tasks.map((task) => (
          <TaskItem key={task.id} taskObj={task} />
        ))}
      </ul>
    );
  }
}

export default TaskList;
