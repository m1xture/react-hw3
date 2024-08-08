import TaskList from "./components/TaskList/TaskList";
import AddBtn from "./components/AddBtn/AddBtn";
import Modal from "./components/Modal/Modal";
import "./index.css";

if (!JSON.parse(localStorage.getItem("login"))) {
  const tasks = [
    {
      title: "Clean-up",
      id: "89381d53-dbcc-5ff3-90ac-3f54d2aec7b5",
    },
    {
      title: "Rest",
      id: "733b5229-4b9f-5135-85d0-674ed431c6ec",
    },
    {
      title: "Cook something",
      id: "3ba3e76c-00d9-5794-b864-4e3db48be3f9",
    },
    {
      title: "Wash the dishes",
      id: "7e3b5cf5-46e0-5d8b-9fd5-ecb91a3a7025",
    },
    {
      title: "Wash the car",
      id: "8da1b5a6-96ce-5750-a8bd-1a8b7b038e04",
    },
    {
      title: "Fix the table",
      id: "cf811f1d-d6fc-5b6a-a0c4-19c892595100",
    },
  ];
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("login", 1);
}

function App() {
  return (
    <>
      <AddBtn />
      <TaskList tasks={JSON.parse(localStorage.getItem("tasks"))}></TaskList>
      <Modal />
    </>
  );
}

export default App;
