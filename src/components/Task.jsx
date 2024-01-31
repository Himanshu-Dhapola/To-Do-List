import { useState } from "react";

export default function Task({ itemObj, onDeleteItems }) {
  const [check, setCheck] = useState(true);

  function handleCheck() {
    setCheck(() => !check);
  }
  return (
    <li className="flex w-[360px] md:w-[700px] justify-between bg-zinc-700 py-2 rounded-md px-4 gap-2">
      <div className="text-wrap">
        <h1
          className={
            check
              ? "text-orange-400 text-[20px] w-[170px] break-words font-semibold md:text-[25px] md:w-[420px]"
              : " text-gray-500 line-through text-[20px] w-[170px] break-words font-semibold md:text-[25px] md:w-[420px]"
          }
        >
          {itemObj.task}
        </h1>
        <p
          className={
            check
              ? "text-white text-[14px] w-[170px] break-words md:text-[18px] md:w-[420px]"
              : " text-gray-500 line-through text-[14px] w-[170px] break-words md:text-[18px] md:w-[420px]"
          }
        >
          {itemObj.description}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className=" text-green-400 border-2 border-green-400 px-[10px] rounded-[50px] bg-green-50 h-[30px] text-sm md:text-lg md:h-[40px] md:px-[18px]"
          onClick={handleCheck}
        >
          Complete
        </button>
        <button
          onClick={() => onDeleteItems(itemObj.task)}
          className=" text-red-400 border-2 border-red-400 px-[10px] rounded-[50px] bg-red-50 h-[30px] text-sm md:text-lg md:h-[40px] md:px-[18px]"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
