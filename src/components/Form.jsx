import { useState } from "react";

export default function Form({ onAddItems }) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  function handleAddItems(e) {
    e.preventDefault();

    if (!task) return;

    const newItem = { task, description };

    onAddItems(newItem);

    setTask("");
    setDescription("");
  }

  return (
    <form
      className="flex w-[360px] md:w-[700px] justify-between bg-zinc-700 py-2 rounded-md px-2 mx-4 gap-3 md:px-4"
      onSubmit={handleAddItems}
    >
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="task" className="text-white">
            Task
          </label>
          <input
            type="input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="rounded-md border-2 border-orange-400 w-32 md:w-60"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="task" className="text-white">
            Description
          </label>
          <input
            type="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-md border-orange-400 border-2 w-32 md:w-60"
          ></input>
        </div>
      </div>
      <button
        className="bg-orange-400 rounded-3xl px-3 py-[5px] font-bold text-white w-16 self-center md:w-24 md:h-10 md:mr-2 md:text-xl"
        onClick={handleAddItems}
      >
        Add
      </button>
    </form>
  );
}
