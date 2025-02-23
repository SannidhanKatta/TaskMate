import useStore from "@/context/store";

const Logo = () => {
  const darkMode = useStore((state) => state.darkMode);

  return (
    <div
      className={`flex gap-3 items-center ${darkMode ? 'bg-[#1E293B]' : 'bg-white'
        } p-2 rounded-md`}
    >
      <div className="flex justify-center items-center w-12 h-12">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#376f84" strokeWidth="3">
            <rect x="6" y="6" width="20" height="20" rx="3" />
            <path d="M10 14l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
      <h1 className={`text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
        TaskMate
      </h1>
    </div>
  );
};

export default Logo;
