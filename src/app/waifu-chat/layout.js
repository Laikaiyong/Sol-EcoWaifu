"use client";

import { SidebarProvider, useSidebarContext } from "../../context/sidebarcontext";
import { twMerge } from "tailwind-merge";
import { DashboardNavbar } from "../(home)/navbar";
import { DashboardSidebar } from "../(home)/sidebar";

const DashboardLayout = function ({ children }) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
};

const DashboardLayoutContent = function ({ children }) {
  const { isCollapsed } = useSidebarContext();

  return (
    <>
      <DashboardNavbar />
      <div className="mt-16 flex items-start w-[90vw] h-[80vh]">
        <DashboardSidebar />
        <div
          // id="main-content"
          className={twMerge(
            "flex bg-gray-50 dark:bg-gray-900 h-[100%] w-[100%]",
            isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;