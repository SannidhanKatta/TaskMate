import React from 'react';

const columnButtonClasses = "text-center text-white text-xs p-2 rounded-full mt-2 border border-[#376f84] bg-[#376f84] hover:bg-[#4a8ba3]";

function AddColumnButton({ setAddingColumn }: { setAddingColumn: (value: boolean) => void }) {
  return (
    <button
      onClick={() => setAddingColumn(true)}
      className={columnButtonClasses}
    >
      + New Column
    </button>
  )
}

export default AddColumnButton;


