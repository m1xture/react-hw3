import Task from "./components/Task/Task";

function renderMarkup() {
  try {
    document
        .querySelector("ul").innerHTML = "";
    const arr = JSON.parse(localStorage.getItem("tasks"));
    arr.map((task) =>
      document
        .querySelector("ul")
        .insertAdjacentHTML("beforeend", <Task taskObj={task} />)
    );
  } catch (err) {
    console.log(err);
  }
}

export default renderMarkup;
