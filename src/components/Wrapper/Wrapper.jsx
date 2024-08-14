import TaskList from "../TaskList/TaskList";
import Modal from "../Modal/Modal";
import { Component } from "react";
class Wrapper extends Component {
  state = {
    reloads: 0,
  };
  reload() {
    this.setState({
      reloads: new Date(),
    });
  }
  render() {
    return (
      <>
        <TaskList tasks={JSON.parse(localStorage.getItem("tasks"))}></TaskList>
        <Modal reload={this.reload} />
      </>
    );
  }
}

export default Wrapper;
