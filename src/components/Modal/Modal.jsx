import { Component } from "react";
import css from "./Modal.module.css";
import { v4 as uuidv4 } from "uuid";
import renderMarkup from "../../render";

class Modal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      id: uuidv4(),
    };
    if (e.target.title.value.length <= 3) {
      console.log("too short task");
      return;
    }
    try {
      const currentTasks = JSON.parse(localStorage.getItem("tasks"));
      currentTasks.push(data);
      localStorage.setItem("tasks", JSON.stringify(currentTasks));
      e.target.parentNode.parentNode.setAttribute("data-is-hidden", true);
      renderMarkup();
    } catch (err) {
      console.log(err);
    }
  };
  handleClose = (e) => {
    if (e.target === e.currentTarget) {
      e.target.setAttribute("data-is-hidden", true);
    }
  };
  render() {
    return (
      <div
        className={`${css.backdrop}`}
        onClick={this.handleClose}
        data-backdrop
        data-is-hidden
      >
        <div className={css.modal}>
          <form onSubmit={this.handleSubmit} className={css.modal__from}>
            <input
              type="text"
              className={css.modal__input}
              placeholder="Task title"
              name="title"
            />
            <button type="submit" className={css.modal__btn}>
              Add task
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
