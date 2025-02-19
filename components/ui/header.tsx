"use client";
import { useSearchParams } from "next/navigation";
import useStore from "@/context/store";
const TaskmateHeader = () => {
  const pathname = useSearchParams();
  const headerTitle = pathname.get("board");
  const { darkMode } = useStore();

  return (
    <div
      className={`
        fixed w-full h-[80px] backdrop-blur-md bg-opacity-90 border-b z-10
        ${darkMode
          ? 'text-white bg-gray-900 border-gray-800'
          : 'text-gray-900 bg-white border-gray-100'}
      `}
    >
      <div className="flex items-center px-8 h-full">
        <h1 className="text-2xl font-semibold">
          {headerTitle || 'Taskmate'}
        </h1>
      </div>
    </div>
  );
};

export default TaskmateHeader;
