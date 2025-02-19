import { PlusIcon } from "@heroicons/react/24/outline";

interface AddTaskButtonProps {
  isDisabled: boolean;
  onClick: () => void;
  darkMode: boolean;
}

const AddTaskButton = ({ onClick, darkMode }: AddTaskButtonProps): JSX.Element => {
  return (
    <div className="fixed right-12 top-4 w-[200px] flex justify-end z-20">
      <button
        onClick={onClick}
        className={`
          px-4 py-2 rounded-lg font-medium 
          transition-all duration-200
          flex items-center gap-2
          ${darkMode
            ? 'bg-[#376f84] hover:bg-[#4a8ba3] text-white'
            : 'bg-[#376f84] hover:bg-[#4a8ba3] text-white'}
        `}
      >
        <PlusIcon className="w-5 h-5" />
        Add New Task
      </button>
    </div>
  );
};

export default AddTaskButton; 