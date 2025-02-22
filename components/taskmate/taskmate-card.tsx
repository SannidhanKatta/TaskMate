import { TaskState } from "@/types/data-types";
import useStore from "@/context/store";

interface KanbanCardProps {
  task: TaskState;
  setState: React.Dispatch<React.SetStateAction<any>>;
  totalSubtasks: string;
}

const TaskmateCard = ({ task, setState, totalSubtasks }: KanbanCardProps) => {
  const darkMode = useStore((state) => state.darkMode);

  const handleTaskClick = () => {
    setState((prev: any) => ({
      ...prev,
      openModul: true,
      taskName: task.title,
      taskId: task.id,
      columnId: task.columnId
    }));
  };

  return (
    <div
      className={`
        group p-6 mb-4 rounded-xl transition-all duration-200
        hover:scale-[1.01] cursor-pointer
        ${darkMode
          ? 'bg-[#1E293B] hover:bg-[#2D3B4E] border-[#334155] text-gray-100'
          : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'}
        border shadow-sm
      `}
      onClick={handleTaskClick}
    >
      <h3 className="mb-2 font-medium line-clamp-1">{task.title}</h3>
      {task.description && (
        <p className={`text-sm mb-2 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {task.description}
        </p>
      )}
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {totalSubtasks} subtasks
      </p>
    </div>
  );
};

export default TaskmateCard;
