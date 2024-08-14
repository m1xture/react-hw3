import { Component } from "react";
import css from "./Task.module.css";

class Task extends Component {
  state = {
    reload: 0,
  };
  deleteTask = (e) => {
    const id = e.currentTarget.parentNode.id;
    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const index = currentTasks.findIndex((task) => task.id === id);
    currentTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
    e.currentTarget.parentNode.remove();
  };
  render() {
    const {
      taskObj: { title, id },
    } = this.props;
    return (
      <li className={css.task} id={id}>
        <h2>{title}</h2>
        <button onClick={this.deleteTask}>Delete</button>
        <sup>{id}</sup>
      </li>
    );
  }
}

export default Task;
