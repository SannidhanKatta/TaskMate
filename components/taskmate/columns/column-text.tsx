const ColumnText = ({
  color,
  alignRight,
  darkMode,
  children,
}: {
  color: string;
  alignRight: boolean;
  children: React.ReactNode;
  darkMode: boolean;
}) => {
  let bgColorClass;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "todo":
        return "bg-[#376f84]";
      case "doing":
        return "bg-[#4a8ba3]";
      case "completed":
        return "bg-[#2c5a6f]";
      default:
        return "bg-[#376f84]";
    }
  };

  switch (color.toLowerCase()) {
    case "todo":
      bgColorClass = "bg-kblue-todo";
      break;
    case "doing":
      bgColorClass = "bg-kpurple-main";
      break;
    case "done":
      bgColorClass = "bg-kgreen-main";
      break;
    default:
      bgColorClass = "bg-kgreen-main";
      break;
  }
  if (!alignRight) {
    return (
      <div className="my-4 text-black">
        <div className={`${darkMode ? 'text-white' : 'text-slate-700'} uppercase text-sm flex items-center gap-2 tracking-[2px]`}>
          <div className={`rounded-xl w-[10px] h-[10px] ${bgColorClass}`}></div>
          {children}
        </div>
      </div>
    );
  }
  if (alignRight) {
    return (
      <div className="my-0 text-black">
        <div className={`${darkMode ? 'text-white' : 'text-slate-700'} uppercase text-sm flex items-center gap-2 tracking-[2px]`}>
          <div className={`rounded-xl w-[10px] h-[10px] ${bgColorClass}`}></div>
          {children}
        </div>
      </div>
    );
  }
};

export default ColumnText;
