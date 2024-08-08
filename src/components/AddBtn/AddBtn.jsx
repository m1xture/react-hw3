import { Component } from "react";
import css from "./AddBtn.module.css";

class AddBtn extends Component {
  openModal = (e) => {
    document
      .querySelector("[data-backdrop]")
      .removeAttribute("data-is-hidden", true);
  };
  render() {
    return (
      <button onClick={this.openModal} className={css.addbtn} type="button">
        Add task
      </button>
    );
  }
}

export default AddBtn;
