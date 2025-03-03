"use client";
import { useRouter, useSearchParams } from "next/navigation";
import useStore from "@/context/store";
import { ViewColumnsIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "../ui/logo";
import { useState, useEffect, ReactNode } from "react";
import { SpinnerCircular, SpinnerRoundOutlined } from "spinners-react";
import Button from "../ui/buttons/button";
import { BoardState } from "@/types/data-types";
import SideNavSignOutBtn from "./sidenav-signout-btn";
import SideNavAddBtn from "./sidenav-add-btn";
import ThemeToggle from "../themeToggle/toggle-theme";

interface SideNavProps {
  boards: BoardState[];
  taskmate: ReactNode;
}
export default function SideNav({ boards, taskmate }: Readonly<SideNavProps>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentBoardName = searchParams.get("board");
  const [boardLoading, setBoardLoading] = useState(false);
  const [addBoardModul, setAddBoardModul] = useState(false);
  const [hideSidenav, setHideSidenav] = useState(false);
  const addBoardId = useStore((state) => state.addBoardId);
  const setLoader = useStore((state) => state.setLoader);
  const darkMode = useStore((state) => state.darkMode);

  async function handleBoardsStore(selectedBoardId: any) {
    addBoardId(selectedBoardId);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setBoardLoading(false);
    }, 5000);
  }

  useEffect(() => {
    if (!boardLoading) {
      router.refresh();
    }
  }, [boardLoading, router]);

  if (hideSidenav) {
    return (
      <div className="flex flex-row w-screen">
        <button
          onClick={() => setHideSidenav(false)}
          className="fixed left-0 bottom-8 z-50 w-14 h-12 cursor-pointer"
          aria-label="Show Sidebar"
        >
          <div className="absolute bottom-0 left-0 w-full h-12 bg-[#376f84] hover:bg-[#376f84]/90 transition-colors rounded-tr-full rounded-br-full">
            <Image
              alt="Show Sidebar"
              width={16}
              height={10}
              className="absolute left-[12px] top-[19px] text-white"
              src="/assets/icon-show-sidebar.svg"
            />
          </div>
        </button>
        {taskmate}
      </div>
    );
  }

  return (
    <div className="flex flex-row w-screen">
      <div
        className={`
  w-[300px] z-1 flex h-full flex-col py-0 md:px-0 border-r
  transition-colors duration-200
  ${darkMode
            ? "bg-[#1E293B] border-[#334155] text-gray-100"
            : "bg-white border-gray-200 text-gray-900"
          }
`}
      >
        <Link
          className={`mb-2 flex h-28 items-start justify-start rounded-md ${darkMode ? "bg-[#1E293B]" : "bg-white"
            } p-4 md:pt-8 md:h-28`}
          href="/"
        >
          <div className="w-32 text-white md:w-40">
            <Logo />
          </div>
        </Link>

        <div className="flex flex-row justify-between space-x-2 grow md:flex-col md:space-x-0 md:space-y-0">
          <div className="px-0 pb-5 pl-4 text-sm font-medium tracking-widest uppercase text-kgray-text">
            All boards ({boards.length})
          </div>
          <div className="pb-6 pl-3 mt-4">
            <Button
              isDisabled={false}
              variant={"secondary"}
              onClick={() => setAddBoardModul(true)}
              isClickEvent={true}
              isDarkMode={darkMode}
            >
              <div>+ Add Board</div>
            </Button>
          </div>
          {boardLoading && currentBoardName === null ? (
            <div className="pl-4 flex flex-row align-middle items-center justify-start gap-2 h-[40px]">
              <div className="text-xs text-indigo-400 animate-pulse pb-2 mb-2 h-[30px] line-clamp-1 leading-1">
                {"Loading board... "}
              </div>
              <div className="h-[42px] animate-pulse opacity-30">
                <SpinnerRoundOutlined
                  size={20}
                  thickness={109}
                  speed={43}
                  color="#635fc7"
                />
              </div>
            </div>
          ) : null}
          <div className="text-black">
            <div className="flex flex-col w-full">
              {/* // @ts-ignore */}
              {boards?.map((board: BoardState) => {
                const isActiveBoard =
                  currentBoardName === board.name && currentBoardName !== null;
                const noActiveBoards =
                  currentBoardName !== board.name && currentBoardName === null;

                const unselectedBoards =
                  currentBoardName !== board.name && currentBoardName !== null;
                return (
                  <div className="text-black" key={board.id}>
                    {noActiveBoards || unselectedBoards ? (
                      <Link
                        href={{
                          pathname: `/taskmate/board/`,
                          query: { board: board.name, id: board.id },
                        }}
                        onClick={() => {
                          setBoardLoading(true);
                          if (unselectedBoards) {
                            setLoader(true);
                            handleBoardsStore(board.id);
                          }
                          if (noActiveBoards) {
                            handleBoardsStore(board.id);
                          }
                        }}
                        key={board.id}
                        className={`flex w-[90%] h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-0 md:px-0 transition-colors duration-75 ease-in-out ${boardLoading && "cursor-not-allowed"
                          } rounded-r-full ${isActiveBoard
                            ? "bg-[#376f84] text-white hover:bg-[#376f84] hover:text-white cursor-not-allowed"
                            : darkMode
                              ? "text-[#828FA3] hover:bg-[#2B2C37] hover:text-white"
                              : "text-[#828FA3] hover:bg-[#E5F2F7] hover:text-[#376f84]"
                          }`}
                      >
                        <ViewColumnsIcon className="ml-4 w-6" />

                        <div className="flex relative flex-row ml-4 w-full md:block">
                          <div className="w-[80%] line-clamp-1 text-left">
                            {board?.name}
                            <div className="absolute top-0 right-[20px] w-[10px]">
                              {isActiveBoard ? (
                                <SpinnerCircular color="white" size={20} />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : null}

                    {isActiveBoard && (
                      <button
                        className={`flex w-[90%] h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium   md:flex-none md:justify-start md:p-0 md:px-0 transition-colors duration-75 ease-in-out ${boardLoading && "cursor-not-allowed"
                          } rounded-r-full ${isActiveBoard
                            ? "bg-[#376f84] text-white hover:bg-[#376f84] hover:text-white cursor-not-allowed"
                            : "bg-white hover:bg-indigo-100 hover:text-indigo-700"
                          }`}
                      >
                        <ViewColumnsIcon className="ml-4 w-6" />

                        <div className="flex relative flex-row items-center ml-4 w-full md:block">
                          <div className="line-clamp-1 text-left w-full max-w-[80%]">
                            {board?.name}
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden w-full h-auto rounded-md grow md:block"></div>
          <div>
            <button
              onClick={() => setHideSidenav(true)}
              className="relative px-7 py-6 w-full"
            >
              <div className="flex gap-4 justify-start items-center align-middle">
                <Image
                  alt=""
                  width={10}
                  height={10}
                  className="w-4 h-4"
                  src={"/assets/icon-hide-sidebar.svg"}
                />
                <div className="text-sm text-slate-400">Hide Sidebar</div>
              </div>
            </button>
            <ThemeToggle />
            <SideNavSignOutBtn />
          </div>
        </div>
      </div>
      {addBoardModul && <SideNavAddBtn setAddBoardModul={setAddBoardModul} />}
      {taskmate}
    </div>
  );
}
