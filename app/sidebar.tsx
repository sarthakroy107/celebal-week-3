"use client";
import Link from "next/link";
import {
  LucideBarChart,
  LucideBox,
  LucideCalendar,
  LucideHome,
  LucideIcon,
  LucideKanban,
  LucideLineChart,
  LucidePalette,
  LucideUser2,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const theme = useTheme();
  return (
    <nav className="w-52 px-1.5 pl-3 border-r border-black/10 dark:border-white/40 dark:text-white flex flex-col justify-between h-screen fixed top-0">
      <div>
        <h1 className="text-center font-bold text-2xl my-3 w-full">CELEBAL</h1>
        <div>
          {sidebar.map(({ category, pages }, index) => (
            <div key={index}>
              <h2 className="text-sm text-black/50 dark:text-white/75 font-bold my-2 uppercase">
                {category}
              </h2>
              <div className="flex flex-col gap-y-1 transition">
                {pages.map(({ icon: Icon, title, link }) => (
                  <div
                    key={title}
                    className="flex gap-x-2 items-center hover:bg-slate-200/75 hover:dark:bg-slate-100/15 px-3 p-1.5 rounded-md cursor-pointer"
                  >
                    <Icon size={16} />
                    <Link href={`/${link.toLowerCase()}`}>
                      <p className="text-black/80 dark:text-white">{title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Sheet>
        <SheetTrigger className="flex gap-x-2 items-center hover:bg-slate-200/75 hover:dark:bg-slate-100/15 px-3 p-1.5 rounded-md cursor-pointer mb-2">
          <LucidePalette size={16} />
          <p className="text-black/80 dark:text-white">Themes</p>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            Themes
          </SheetHeader>
          <div className="flex flex-col gap-y-1 transition">
            <div
              className="flex gap-x-2 items-center hover:bg-slate-200/75 hover:dark:bg-slate-100/15 px-3 p-1.5 rounded-md cursor-pointer"
              onClick={() => theme.setTheme("system")}
            >
              <p className="text-black/80 dark:text-white">System</p>
            </div>
            <div
              className="flex gap-x-2 items-center hover:bg-slate-200/75 hover:dark:bg-slate-100/15 px-3 p-1.5 rounded-md cursor-pointer"
              onClick={() => theme.setTheme("light")}
            >
              <p className="text-black/80 dark:text-white">Light</p>
            </div>
            <div
              className="flex gap-x-2 items-center hover:bg-slate-200/75 hover:dark:bg-slate-100/15 px-3 p-1.5 rounded-md cursor-pointer"
              onClick={() => theme.setTheme("dark")}
            >
              <p className="text-black/80 dark:text-white">Dark</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const sidebar: {
  category: string;
  pages: {
    icon: LucideIcon;
    title: string;
    link: string;
  }[];
}[] = [
  {
    category: "dashboard",
    pages: [
      {
        icon: LucideHome,
        title: "Home",
        link: "dashboard",
      },
    ],
  },
  // {
  //   category: "pages",
  //   pages: [
  //     {
  //       icon: LucideUser2,
  //       title: "Users",
  //       link: "dashboard/users",
  //     },
  //     {
  //       icon: LucideBox,
  //       title: "Products",
  //       link: "dashboard/products",
  //     },
  //   ],
  // },
  {
    category: "apps",
    pages: [
      {
        icon: LucideCalendar,
        title: "Calendar",
        link: "dashboard/calendar",
      },
      {
        icon: LucideKanban,
        title: "Kanban",
        link: "dashboard/kanban",
      },
    ],
  },
  {
    category: "charts",
    pages: [
      {
        icon: LucideBarChart,
        title: "Barchart",
        link: "dashboard/barchart",
      },
      {
        icon: LucideLineChart,
        title: "LineChart",
        link: "dashboard/linechart",
      },
    ],
  },
];
