import Task from './Task';
export default function List({ items, onDeleteItems }) {
  return (
    <ul className="w-[360px] md:w-[700px] flex flex-col justify-center rounded-md mt-2 gap-1 mb-2">
      {items.map((it) => (
        <Task itemObj={it} onDeleteItems={onDeleteItems} key={items.task} />
      ))}
    </ul>
  );
}
