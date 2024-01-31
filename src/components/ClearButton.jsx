export default function ClearButton({ onClearList }){
  return (
    <>
      <button className="bg-orange-400 rounded-[50px] px-4 py-2 font-bold text-white mb-5 text-sm md:text-xl" onClick={onClearList }>
        Clear List
      </button>
    </>
  );
}
