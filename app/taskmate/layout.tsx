import TaskmateHeader from "../../components/ui/header";
import SideNav from "../../components/taskmate/sidenav";
import MobileMessage from "@/components/taskmate/mobile-message";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getBoards = async () => {
  const user = await getUserByClerkId();
  const boards = await prisma.board.findMany({
    where: {
      userId: user.id,
    },
    include: {
      columns: {
        include: {
          tasks: {
            include: {
              subtasks: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return boards;
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const boards = await getBoards();

  return (
    <>
      {/* Mobile Message */}
      <div className="md:hidden">
        <MobileMessage />
      </div>

      {/* Desktop Kanban Board */}
      <div className="hidden flex-col h-screen md:flex taskmate-bg md:flex-row md:overflow-hidden">
        <SideNav boards={boards} taskmate={children} />

      </div>
    </>
  );
}

