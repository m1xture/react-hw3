import Task from "./components/Task/Task";

function renderMarkup() {
  try {
    document.querySelector("ul").innerHTML = "";
    const arr = JSON.parse(localStorage.getItem("tasks"));
    console.log(arr);
    
  } catch (err) {
    console.log(err);
  }
}

export default renderMarkup;
